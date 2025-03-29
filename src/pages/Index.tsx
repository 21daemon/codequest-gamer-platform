import { useState } from 'react';
import PlayerStats from '../components/PlayerStats';
import ChallengeCard from '../components/ChallengeCard';
import LearningPath from '../components/LearningPath';
import ProgressBar from '../components/ProgressBar';
import CodeEditor from '../components/CodeEditor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad2, Code, BookOpen, Trophy, Star, Clock, ArrowRight } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topic: string;
  rewardXP: number;
  estimatedTime: number;
  successRate: number;
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Reverse a String",
    description: "Write a function that reverses a given string.",
    difficulty: "Beginner",
    topic: "Algorithms",
    rewardXP: 50,
    estimatedTime: 15,
    successRate: 85,
  },
  {
    id: 2,
    title: "Implement a Queue",
    description: "Create a queue data structure with enqueue and dequeue methods.",
    difficulty: "Intermediate",
    topic: "Data Structures",
    rewardXP: 80,
    estimatedTime: 30,
    successRate: 60,
  },
  {
    id: 3,
    title: "Design a Basic Web Server",
    description: "Build a simple web server that can handle GET requests.",
    difficulty: "Advanced",
    topic: "Backend Development",
    rewardXP: 120,
    estimatedTime: 60,
    successRate: 40,
  },
];

interface LearningPathData {
  id: number;
  title: string;
  description: string;
  progress: number;
  estimatedTime: string;
  modules: number;
}

const learningPaths: LearningPathData[] = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Get started with React and learn the basics of building user interfaces.",
    progress: 30,
    estimatedTime: "4h 30m",
    modules: 8,
  },
  {
    id: 2,
    title: "Node.js API Development",
    description: "Learn how to build RESTful APIs using Node.js and Express.",
    progress: 70,
    estimatedTime: "6h 00m",
    modules: 12,
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("challenges");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-quest-dark to-quest-card/50">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to CodeQuest!
          </h1>
          <p className="text-lg text-quest-light mb-8">
            Embark on coding challenges, track your progress, and level up your
            skills.
          </p>
          <Button className="bg-quest-primary hover:bg-quest-primary/90">
            Start Learning Now
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <PlayerStats label="Challenges Completed" value={42} icon={Code} />
          <PlayerStats label="Learning Paths Started" value={7} icon={BookOpen} />
          <PlayerStats label="Total XP Earned" value={2450} icon={Star} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Featured Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="bg-quest-card/50 backdrop-blur-md border-b border-quest-card">
              <TabsTrigger value="challenges" className="data-[state=active]:bg-quest-primary/20">
                <Code className="mr-2 h-4 w-4" /> Challenges
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="data-[state=active]:bg-quest-primary/20">
                <Trophy className="mr-2 h-4 w-4" /> Leaderboard
              </TabsTrigger>
            </TabsList>
            <TabsContent value="challenges" className="mt-6">
              <Card className="bg-quest-card">
                <CardHeader>
                  <CardTitle>Daily Challenge</CardTitle>
                  <CardDescription>Test your skills with a new challenge every day.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Solve the "Array Transformation" challenge to earn extra XP.</p>
                  <Badge className="bg-quest-accent text-white mt-4">Difficulty: Intermediate</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="bg-quest-secondary hover:bg-quest-secondary/90">
                    Start Challenge <Clock className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="leaderboard" className="mt-6">
              <Card className="bg-quest-card">
                <CardHeader>
                  <CardTitle>Top Coders</CardTitle>
                  <CardDescription>See who's leading the ranks this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Leaderboard content coming soon!</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-white">Quick Code Playground</h2>
          <div className="bg-quest-card rounded-lg shadow-lg p-4">
            <CodeEditor 
              initialValue="// Start coding here
console.log('Hello CodeQuest!');"
              language="javascript"
            />
            <div className="flex justify-end mt-4">
              <Button className="bg-quest-primary hover:bg-quest-primary/90">
                Run Code <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPaths.map((path) => (
              <LearningPath key={path.id} path={path} />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join the Community
          </h2>
          <p className="text-lg text-quest-light mb-8">
            Connect with fellow coders, share your knowledge, and collaborate on
            projects.
          </p>
          <Button className="bg-quest-secondary hover:bg-quest-secondary/90">
            Visit the Forums
          </Button>
        </section>

        <footer className="text-center mt-12 py-4 text-quest-light border-t border-quest-card/50">
          <p>&copy; 2024 CodeQuest. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
