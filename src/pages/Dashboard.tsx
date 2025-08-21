import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Code, BookOpen, Award, Zap, Target, Calendar } from "lucide-react";
import PlayerStats from "@/components/PlayerStats";
import ChallengeCard from "@/components/ChallengeCard";
import CodeEditor from "@/components/CodeEditor";
import LearningPath from "@/components/LearningPath";
import { useChallenges } from "@/hooks/useChallenges";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import AchievementBadge from "@/components/AchievementBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { user } = useAuth();
  const { challenges, isLoading, userStats, isLoadingStats, completeChallenge } = useChallenges();
  const [selectedChallenge, setSelectedChallenge] = React.useState<null | any>(null);
  const [activeTab, setActiveTab] = React.useState("challenges");

  const handleChallengeSelect = (challenge: any) => {
    setSelectedChallenge(challenge);
  };

  const handleRunCode = async (code: string) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please log in to complete challenges",
      });
      return;
    }

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
      
      // Show success confetti or animation
      showSuccessAnimation();
    } catch (error) {
      console.error('Error completing challenge:', error);
    }
  };

  const showSuccessAnimation = () => {
    // Simple animation using CSS classes
    const element = document.getElementById('success-animation');
    if (element) {
      element.classList.add('animate-fade-in');
      setTimeout(() => {
        element.classList.remove('animate-fade-in');
      }, 3000);
    }
  };

  // Calculate stats based on user data or use placeholder
  const stats = React.useMemo(() => {
    if (userStats) {
      return {
        level: userStats.level || 1,
        xp: userStats.xp || 0,
        xpToNextLevel: calculateXpForNextLevel(userStats.level || 1),
        completedChallenges: challenges?.filter(c => c.completed).length || 0,
        streak: userStats.streak_days || 0,
        learningDays: userStats.streak_days || 0
      };
    }
    
    // Default stats as fallback
    return {
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      completedChallenges: 0,
      streak: 0,
      learningDays: 0
    };
  }, [userStats, challenges]);

  // Function to calculate XP needed for next level
  function calculateXpForNextLevel(level: number): number {
    // Simple formula: 100 * level^1.5
    return Math.floor(100 * Math.pow(level, 1.5));
  }

  // Enhanced learning paths with more content
  const learningPaths = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description: "Master the core concepts of JavaScript from variables to advanced functions.",
      level: "Beginner",
      modules: 8,
      duration: "4 weeks",
      progress: 65,
      image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      id: 2,
      title: "React Development",
      description: "Build modern web applications with React hooks, components, and state management.",
      level: "Intermediate",
      modules: 12,
      duration: "6 weeks", 
      progress: 30,
      image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      id: 3,
      title: "Algorithm Mastery",
      description: "Dive deep into data structures and algorithms to solve complex problems efficiently.",
      level: "Advanced",
      modules: 15,
      duration: "8 weeks",
      progress: 15,
      image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      id: 4,
      title: "Full-Stack Web Development",
      description: "Complete guide to building web applications from frontend to backend.",
      level: "Intermediate to Advanced",
      modules: 20,
      duration: "12 weeks",
      progress: 5,
      image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    }
  ];

  // Filter challenges by difficulty
  const beginnerChallenges = challenges?.filter(c => c.difficulty === 'Beginner') || [];
  const intermediateChallenges = challenges?.filter(c => c.difficulty === 'Intermediate') || [];
  const advancedChallenges = challenges?.filter(c => c.difficulty === 'Advanced') || [];

  return (
    <div className="flex flex-col min-h-screen pb-10 relative">
      {/* Success animation container */}
      <div 
        id="success-animation" 
        className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-0 z-50 bg-background/80 backdrop-blur-sm"
      >
        <div className="quest-card p-12 transform scale-150 quest-glow">
          <div className="text-center space-y-4">
            <Award size={80} className="mx-auto text-quest-success animate-bounce" />
            <h2 className="text-3xl font-bold quest-gradient-text">Quest Complete!</h2>
            <p className="text-quest-light">+{selectedChallenge?.points || 0} XP earned</p>
            <div className="flex justify-center space-x-2">
              <Badge className="bg-quest-success">Level Up!</Badge>
              <Badge className="bg-quest-primary">Achievement Unlocked</Badge>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left sidebar - Player stats and achievements */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Section */}
            <div className="quest-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-quest-primary/20 rounded-lg">
                  <Target className="h-5 w-5 text-quest-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Welcome back!</h3>
                  <p className="text-sm text-muted-foreground">Ready for today's challenge?</p>
                </div>
              </div>
              <Button className="w-full quest-button">
                <Calendar className="mr-2 h-4 w-4" />
                Daily Challenge
              </Button>
            </div>

            {/* Player Stats */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold quest-gradient-text">Your Progress</h2>
              <Separator className="bg-border" />
            </div>
            
            <PlayerStats stats={stats} />

            {/* Achievements section */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold quest-gradient-text">Achievements</h2>
              <Separator className="bg-border" />
            </div>
            <div className="quest-card">
              <div className="grid grid-cols-3 gap-4">
                <AchievementBadge 
                  title="First Steps" 
                  icon={<Code size={20} />}
                  unlocked={stats.completedChallenges > 0}
                />
                <AchievementBadge 
                  title="Streak Master" 
                  icon={<Zap size={20} />}
                  unlocked={stats.streak >= 7}
                />
                <AchievementBadge 
                  title="Problem Solver" 
                  icon={<Target size={20} />}
                  progress={stats.completedChallenges}
                  totalRequired={10}
                />
                <AchievementBadge 
                  title="Speed Demon" 
                  icon={<Zap size={20} />}
                  unlocked={false}
                />
                <AchievementBadge 
                  title="Level 5" 
                  icon={<Award size={20} />}
                  unlocked={stats.level >= 5}
                />
                <AchievementBadge 
                  title="Perfect Score" 
                  icon={<Target size={20} />}
                  unlocked={false}
                />
              </div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold quest-gradient-text">
                Coding Dashboard
              </h1>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-quest-primary/20 text-quest-primary">
                  Level {stats.level}
                </Badge>
                <Badge variant="outline">
                  {stats.completedChallenges} Completed
                </Badge>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-quest-card/50 border border-border">
                <TabsTrigger 
                  value="challenges" 
                  className="data-[state=active]:bg-quest-primary/20 data-[state=active]:text-quest-primary"
                >
                  <Code className="mr-2 h-4 w-4" /> Challenges
                </TabsTrigger>
                <TabsTrigger 
                  value="learning" 
                  className="data-[state=active]:bg-quest-primary/20 data-[state=active]:text-quest-primary"
                >
                  <BookOpen className="mr-2 h-4 w-4" /> Learning Paths
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="challenges" className="mt-6 space-y-6">
                {/* Challenge Difficulty Sections */}
                <div className="space-y-8">
                  {/* Beginner Challenges */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-quest-success">Beginner Quests</h3>
                      <Badge className="bg-quest-success/20 text-quest-success">
                        {beginnerChallenges.filter(c => c.completed).length}/{beginnerChallenges.length}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {isLoading ? (
                        <p>Loading challenges...</p>
                      ) : beginnerChallenges.length > 0 ? (
                        beginnerChallenges.map((challenge) => (
                          <ChallengeCard 
                            key={challenge.id} 
                            challenge={challenge}
                            onSelect={handleChallengeSelect}
                          />
                        ))
                      ) : (
                        <p>No beginner challenges found.</p>
                      )}
                    </div>
                  </div>

                  {/* Intermediate Challenges */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-quest-secondary">Intermediate Quests</h3>
                      <Badge className="bg-quest-secondary/20 text-quest-secondary">
                        {intermediateChallenges.filter(c => c.completed).length}/{intermediateChallenges.length}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {intermediateChallenges.map((challenge) => (
                        <ChallengeCard 
                          key={challenge.id} 
                          challenge={challenge}
                          onSelect={handleChallengeSelect}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Advanced Challenges */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-quest-danger">Expert Quests</h3>
                      <Badge className="bg-quest-danger/20 text-quest-danger">
                        {advancedChallenges.filter(c => c.completed).length}/{advancedChallenges.length}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {advancedChallenges.map((challenge) => (
                        <ChallengeCard 
                          key={challenge.id} 
                          challenge={challenge}
                          onSelect={handleChallengeSelect}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Code Editor for selected challenge */}
                {selectedChallenge && (
                  <div className="mt-8">
                    <div className="mb-6 quest-card">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold quest-gradient-text">{selectedChallenge.title}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge className={
                              selectedChallenge.difficulty === 'Beginner' ? 'bg-quest-success' :
                              selectedChallenge.difficulty === 'Intermediate' ? 'bg-quest-secondary' : 
                              'bg-quest-danger'
                            }>
                              {selectedChallenge.difficulty}
                            </Badge>
                            <Badge variant="outline">{selectedChallenge.category}</Badge>
                            <Badge className="bg-quest-accent/20 text-quest-accent">
                              {selectedChallenge.points} XP
                            </Badge>
                          </div>
                        </div>
                        {selectedChallenge.completed && (
                          <Badge className="bg-quest-success">
                            <Award className="mr-1 h-3 w-3" /> Completed
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{selectedChallenge.description}</p>
                    </div>
                    
                    <CodeEditor
                      initialCode={selectedChallenge.starter_code || '// Write your solution here'}
                      language="javascript"
                      onRun={handleRunCode}
                      testCases={selectedChallenge.test_cases || []}
                      challenge={selectedChallenge}
                    />
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="learning" className="mt-6">
                <ScrollArea className="h-[800px] pr-4">
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold quest-gradient-text mb-2">Choose Your Learning Path</h3>
                      <p className="text-muted-foreground">Structured courses designed to level up your skills</p>
                    </div>
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

export default Dashboard;