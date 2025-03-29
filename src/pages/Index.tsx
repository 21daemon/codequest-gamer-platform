
import { useState } from "react";
import CodeQuestHeader from "@/components/CodeQuestHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProgressBar from "@/components/ProgressBar";
import { BadgeCheck, Code, CodeXml, Terminal, Trophy, Clock, BookOpen, Zap, FileBadge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChallengeCard from "@/components/ChallengeCard";
import AchievementBadge from "@/components/AchievementBadge";
import LearningPath from "@/components/LearningPath";
import CodeEditor from "@/components/CodeEditor";
import PlayerStats from "@/components/PlayerStats";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [activeTab, setActiveTab] = useState("challenges");

  // Sample player data
  const playerData = {
    name: "CodeWizard42",
    level: 7,
    xp: 3240,
    xpToNextLevel: 4000,
    streak: 12,
    achievements: 8,
    completedChallenges: 23,
  };

  // Sample challenges data
  const challenges = [
    {
      id: 1,
      title: "Hello World Function",
      description: "Create a function that returns 'Hello, World!'",
      difficulty: "Beginner" as "Beginner" | "Intermediate" | "Advanced",
      xpReward: 50,
      completed: true,
      locked: false,
      language: "javascript",
    },
    {
      id: 2,
      title: "Array Manipulation",
      description: "Filter an array of numbers to return only even values",
      difficulty: "Beginner" as "Beginner" | "Intermediate" | "Advanced",
      xpReward: 75,
      completed: true,
      locked: false,
      language: "javascript",
    },
    {
      id: 3,
      title: "API Data Fetching",
      description: "Create a function to fetch and display user data from an API",
      difficulty: "Intermediate" as "Beginner" | "Intermediate" | "Advanced",
      xpReward: 150,
      completed: false,
      locked: false,
      language: "javascript",
    },
    {
      id: 4,
      title: "Build a Todo App",
      description: "Create a simple todo application with React",
      difficulty: "Intermediate" as "Beginner" | "Intermediate" | "Advanced",
      xpReward: 200,
      completed: false,
      locked: false,
      language: "react",
    },
    {
      id: 5,
      title: "State Management",
      description: "Implement global state management in a React application",
      difficulty: "Advanced" as "Beginner" | "Intermediate" | "Advanced",
      xpReward: 250,
      completed: false,
      locked: true,
      language: "react",
    },
  ];

  // Sample achievements data
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      icon: <BadgeCheck className="h-8 w-8 text-quest-primary" />,
      unlocked: true,
    },
    {
      id: 2,
      title: "Streak Master",
      icon: <Zap className="h-8 w-8 text-quest-warning" />,
      unlocked: true,
    },
    {
      id: 3,
      title: "Code Explorer",
      icon: <Code className="h-8 w-8 text-quest-accent" />,
      unlocked: false,
      progress: 2,
      totalRequired: 5,
    },
    {
      id: 4,
      title: "Algorithm Expert",
      icon: <CodeXml className="h-8 w-8 text-quest-secondary" />,
      unlocked: false,
      progress: 3,
      totalRequired: 10,
    },
  ];

  // Sample learning paths
  const learningPaths = [
    {
      id: 1,
      pathName: "JavaScript Fundamentals",
      steps: [
        { id: 1, title: "Variables & Data Types", completed: true, locked: false },
        { id: 2, title: "Functions & Scope", completed: true, locked: false },
        { id: 3, title: "Arrays & Objects", completed: false, locked: false },
        { id: 4, title: "DOM Manipulation", completed: false, locked: true },
      ]
    },
    {
      id: 2,
      pathName: "React Development",
      steps: [
        { id: 1, title: "JSX Basics", completed: true, locked: false },
        { id: 2, title: "Component Structure", completed: false, locked: false },
        { id: 3, title: "State & Props", completed: false, locked: false },
        { id: 4, title: "Hooks & Context", completed: false, locked: true },
      ]
    },
    {
      id: 3,
      pathName: "Backend with Node.js",
      steps: [
        { id: 1, title: "Node.js Basics", completed: true, locked: false },
        { id: 2, title: "Express Routing", completed: false, locked: false },
        { id: 3, title: "Middleware", completed: false, locked: true },
        { id: 4, title: "Database Integration", completed: false, locked: true },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-dark-gradient text-foreground">
      <CodeQuestHeader />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <div className="quest-card flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              <Avatar className="w-20 h-20 border-4 border-quest-primary">
                <AvatarImage src="" alt="Player Avatar" />
                <AvatarFallback className="bg-quest-primary text-xl">
                  {playerData.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h2 className="text-2xl font-bold">{playerData.name}</h2>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-quest-primary px-2 py-1">
                      <Zap className="mr-1 h-3 w-3" />
                      Level {playerData.level}
                    </Badge>
                    <Badge className="bg-quest-secondary px-2 py-1">
                      <Clock className="mr-1 h-3 w-3" />
                      {playerData.streak} Day Streak
                    </Badge>
                  </div>
                </div>
                
                <ProgressBar 
                  value={playerData.xp} 
                  maxValue={playerData.xpToNextLevel} 
                  label="XP Progress" 
                  className="mb-2" 
                />
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-md bg-quest-card/50 p-2">
                    <Trophy className="h-4 w-4 mx-auto mb-1 text-quest-accent" />
                    <p className="text-xs text-muted-foreground">Achievements</p>
                    <p className="font-bold">{playerData.achievements}</p>
                  </div>
                  <div className="rounded-md bg-quest-card/50 p-2">
                    <CodeXml className="h-4 w-4 mx-auto mb-1 text-quest-primary" />
                    <p className="text-xs text-muted-foreground">Completed</p>
                    <p className="font-bold">{playerData.completedChallenges}</p>
                  </div>
                  <div className="rounded-md bg-quest-card/50 p-2">
                    <BookOpen className="h-4 w-4 mx-auto mb-1 text-quest-secondary" />
                    <p className="text-xs text-muted-foreground">Rank</p>
                    <p className="font-bold">Silver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="quest-card">
            <PlayerStats 
              level={playerData.level}
              xp={playerData.xp}
              xpToNextLevel={playerData.xpToNextLevel}
              completedChallenges={playerData.completedChallenges}
              streak={playerData.streak}
              learningDays={30}
            />
          </div>
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="learning">Learning Paths</TabsTrigger>
            <TabsTrigger value="playground">Code Playground</TabsTrigger>
          </TabsList>
          
          <TabsContent value="challenges" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge) => (
                <ChallengeCard
                  key={challenge.id}
                  onClick={() => console.log(`Challenge ${challenge.id} clicked`)}
                  {...challenge}
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-quest-secondary hover:bg-quest-secondary/90">
                <FileBadge className="mr-2 h-4 w-4" />
                Browse All Challenges
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <AchievementBadge 
                  key={achievement.id} 
                  title={achievement.title}
                  icon={achievement.icon}
                  unlocked={achievement.unlocked}
                  progress={achievement.progress}
                  totalRequired={achievement.totalRequired}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="learning" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <LearningPath key={path.id} {...path} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-quest-primary hover:bg-quest-primary/90">
                <BookOpen className="mr-2 h-4 w-4" />
                Explore All Learning Paths
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="playground" className="mt-6">
            <div className="quest-card p-0 overflow-hidden">
              <CodeEditor height="400px" language="javascript" defaultValue={`// Welcome to the CodeQuest Playground!
// Start typing your code here...

function greetUser(name) {
  return \`Hello, \${name}! Welcome to CodeQuest.\`;
}

console.log(greetUser("Coder"));`} />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
