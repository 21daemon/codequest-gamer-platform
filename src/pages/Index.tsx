
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Trophy, Star, Code, BookOpen } from "lucide-react";
import PlayerStats from "@/components/PlayerStats";
import ChallengeCard from "@/components/ChallengeCard";
import CodeEditor from "@/components/CodeEditor";
import LearningPath from "@/components/LearningPath";
import { Challenge, LearningPathData } from "@/types/components";

const Index = () => {
  // Sample data for player stats
  const playerStats = [
    {
      label: "Completed Challenges",
      value: 24,
      icon: Trophy
    },
    {
      label: "Current Streak",
      value: 7,
      icon: Gamepad2
    },
    {
      label: "Total Points",
      value: 4250,
      icon: Star
    }
  ];

  // Sample data for challenges
  const challenges: Challenge[] = [
    {
      id: 1,
      title: "React State Management",
      description: "Learn how to manage state in React using hooks and context API.",
      difficulty: "Intermediate",
      category: "React",
      points: 150,
      completionRate: 65,
      isCompleted: true
    },
    {
      id: 2,
      title: "Async JavaScript",
      description: "Master asynchronous JavaScript with Promises and async/await.",
      difficulty: "Intermediate",
      category: "JavaScript",
      points: 125,
      completionRate: 48
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      description: "Build responsive layouts using CSS Grid.",
      difficulty: "Beginner",
      category: "CSS",
      points: 75,
      completionRate: 89
    },
    {
      id: 4,
      title: "TypeScript Generics",
      description: "Deep dive into TypeScript generics and advanced types.",
      difficulty: "Advanced",
      category: "TypeScript",
      points: 200,
      completionRate: 32
    }
  ];

  // Sample data for learning paths
  const learningPaths: LearningPathData[] = [
    {
      id: 1,
      title: "React Mastery",
      description: "Comprehensive React learning path from basics to advanced concepts.",
      level: "Beginner to Advanced",
      modules: 12,
      duration: "8 weeks",
      progress: 45,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      id: 2,
      title: "Full-Stack JavaScript",
      description: "Build complete applications with JavaScript, Node.js, and modern frameworks.",
      level: "Intermediate",
      modules: 15,
      duration: "10 weeks",
      progress: 20,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      id: 3,
      title: "CSS and Design Systems",
      description: "Master CSS and learn to build scalable design systems.",
      level: "Beginner to Intermediate",
      modules: 8,
      duration: "6 weeks",
      progress: 10,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    }
  ];

  // Sample code for the editor
  const sampleCode = `function greet(name) {
  return \`Hello, \${name}! Welcome to CodeQuest.\`;
}

// Try calling the function
console.log(greet('Developer'));`;

  return (
    <div className="flex flex-col min-h-screen pb-10">
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left sidebar - Player stats */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-quest-light">Your Stats</h2>
              <Separator className="bg-quest-card/80" />
            </div>
            
            <div className="space-y-4">
              {playerStats.map((stat, index) => (
                <PlayerStats key={index} stat={stat} />
              ))}
            </div>

            <Card className="bg-card-gradient border-quest-card/50">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-quest-light">Daily Streak</h3>
                    <Badge variant="outline" className="bg-quest-primary/20 text-quest-primary">7 Days</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-quest-card/50 rounded-full h-2.5">
                      <div className="bg-quest-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Next reward: 3 days</span>
                      <span>10 / 14</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content area */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-quest-primary to-quest-secondary">Dashboard</h1>
              <Button className="bg-quest-primary hover:bg-quest-primary/90">
                <Code className="mr-2 h-4 w-4" /> New Challenge
              </Button>
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
                  {challenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} item={challenge} />
                  ))}
                </div>
                
                <Card className="bg-card-gradient border-quest-card/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Coding Practice</h3>
                    <p className="text-muted-foreground mb-4">
                      Try out this JavaScript challenge. Edit the code and see the results in real-time.
                    </p>
                    <CodeEditor code={sampleCode} language="javascript" />
                    <div className="flex justify-end mt-4">
                      <Button className="bg-quest-secondary hover:bg-quest-secondary/90">
                        Run Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="learning" className="mt-6">
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {learningPaths.map((path) => (
                      <LearningPath key={path.id} data={path} />
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
