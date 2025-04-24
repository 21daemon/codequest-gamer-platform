import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Code, BookOpen } from "lucide-react";
import PlayerStats from "@/components/PlayerStats";
import ChallengeCard from "@/components/ChallengeCard";
import CodeEditor from "@/components/CodeEditor";
import LearningPath from "@/components/LearningPath";
import { useChallenges } from "@/hooks/useChallenges";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const { user } = useAuth();
  const { challenges, isLoading, completeChallenge } = useChallenges();
  const [selectedChallenge, setSelectedChallenge] = React.useState<null | any>(null);

  const handleChallengeSelect = (challenge: any) => {
    setSelectedChallenge(challenge);
  };

  const handleRunCode = async (code: string) => {
    if (!selectedChallenge) {
      toast({
        title: "No challenge selected",
        description: "Please select a challenge first",
      });
      return;
    }

    try {
      await completeChallenge.mutateAsync({
        challengeId: selectedChallenge.id,
        code,
        xpEarned: selectedChallenge.points,
      });
    } catch (error) {
      console.error('Error completing challenge:', error);
    }
  };

  // Sample data for learning paths
  const learningPaths = [
    {
      id: 1,
      title: "React Mastery",
      description: "Comprehensive React learning path from basics to advanced concepts.",
      level: "Beginner to Advanced",
      modules: 12,
      duration: "8 weeks",
      progress: 45,
      image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      id: 2,
      title: "Full-Stack JavaScript",
      description: "Build complete applications with JavaScript, Node.js, and modern frameworks.",
      level: "Intermediate",
      modules: 15,
      duration: "10 weeks",
      progress: 20,
      image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      id: 3,
      title: "CSS and Design Systems",
      description: "Master CSS and learn to build scalable design systems.",
      level: "Beginner to Intermediate",
      modules: 8,
      duration: "6 weeks",
      progress: 10,
      image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pb-10">
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left sidebar - Player stats */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-quest-light">Your Stats</h2>
              <Separator className="bg-quest-card/80" />
            </div>
            
            <PlayerStats stats={{
              level: 5,
              xp: 750,
              xpToNextLevel: 1000,
              completedChallenges: 24,
              streak: 7,
              learningDays: 35
            }} />
          </div>
          
          {/* Main content area */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-quest-primary to-quest-secondary">
                Dashboard
              </h1>
            </div>
            
            <Tabs defaultValue="challenges" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-quest-card/50">
                <TabsTrigger value="challenges" className="data-[state=active]:bg-quest-primary/20">
                  <Code className="mr-2 h-4 w-4" /> Challenges
                </TabsTrigger>
                <TabsTrigger value="learning" className="data-[state=active]:bg-quest-primary/20">
                  <BookOpen className="mr-2 h-4 w-4" /> Learning Paths
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="challenges" className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {isLoading ? (
                    <p>Loading challenges...</p>
                  ) : (
                    challenges?.map((challenge) => (
                      <ChallengeCard 
                        key={challenge.id} 
                        challenge={challenge}
                        onSelect={handleChallengeSelect}
                      />
                    ))
                  )}
                </div>
                
                {selectedChallenge && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4">{selectedChallenge.title}</h3>
                    <p className="text-muted-foreground mb-4">{selectedChallenge.description}</p>
                    <CodeEditor
                      initialCode={selectedChallenge.starter_code || '// Write your solution here'}
                      language="javascript"
                      onRun={handleRunCode}
                    />
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="learning" className="mt-6">
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {learningPaths.map((path) => (
                      <LearningPath key={path.id} learningPath={path} />
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
