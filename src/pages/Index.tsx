
import { useState } from 'react';
import { Award, Book, Code, Gamepad, Terminal, Trophy, Zap, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import CodeQuestHeader from "@/components/CodeQuestHeader";
import PlayerStats from "@/components/PlayerStats";
import ChallengeCard from "@/components/ChallengeCard";
import AchievementBadge from "@/components/AchievementBadge";
import CodeEditor from "@/components/CodeEditor";
import LearningPath from "@/components/LearningPath";

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for the learning paths
  const learningPaths = [
    {
      id: 1,
      name: "JavaScript Fundamentals",
      steps: [
        { id: 1, title: "Variables & Data Types", completed: true, locked: false },
        { id: 2, title: "Operators & Expressions", completed: true, locked: false },
        { id: 3, title: "Control Flow", completed: false, locked: false },
        { id: 4, title: "Functions", completed: false, locked: false },
        { id: 5, title: "Arrays & Objects", completed: false, locked: true },
      ]
    },
    {
      id: 2,
      name: "Python Basics",
      steps: [
        { id: 1, title: "Getting Started", completed: true, locked: false },
        { id: 2, title: "Variables & Types", completed: false, locked: false },
        { id: 3, title: "Lists & Tuples", completed: false, locked: true },
        { id: 4, title: "Conditionals", completed: false, locked: true },
        { id: 5, title: "Loops", completed: false, locked: true },
      ]
    }
  ];

  // Mock data for the challenges
  const challenges = [
    {
      id: 1,
      title: "String Reversal",
      description: "Create a function that reverses a string without using built-in reverse()",
      difficulty: "Beginner",
      xpReward: 50,
      completed: true,
      locked: false,
      language: "JavaScript"
    },
    {
      id: 2,
      title: "FizzBuzz Challenge",
      description: "Solve the classic FizzBuzz programming problem",
      difficulty: "Beginner",
      xpReward: 75,
      completed: false,
      locked: false,
      language: "JavaScript"
    },
    {
      id: 3,
      title: "Palindrome Checker",
      description: "Check if a string is a palindrome (reads the same forwards and backwards)",
      difficulty: "Beginner",
      xpReward: 100,
      completed: false,
      locked: false,
      language: "JavaScript"
    },
    {
      id: 4,
      title: "Array Filtering",
      description: "Filter an array based on specific criteria without using built-in methods",
      difficulty: "Intermediate",
      xpReward: 150,
      completed: false,
      locked: true,
      language: "JavaScript"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-gradient text-white flex flex-col">
      <CodeQuestHeader />
      
      <main className="flex-1 container mx-auto px-4 py-6 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="quest-card animate-scale-fade-in">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-quest-primary to-quest-secondary flex items-center justify-center text-white text-2xl font-bold mb-2 animate-pulse-glow">
                  PL
                </div>
                <h2 className="text-xl font-bold">Player One</h2>
                <p className="text-quest-light text-sm">Joined 7 days ago</p>
              </div>
              
              <Separator className="my-4" />
              
              <nav>
                <ul className="space-y-1">
                  <li>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeTab === 'dashboard' ? 'bg-quest-card' : ''}`}
                      onClick={() => setActiveTab('dashboard')}
                    >
                      <Gamepad className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeTab === 'challenges' ? 'bg-quest-card' : ''}`}
                      onClick={() => setActiveTab('challenges')}
                    >
                      <Code className="mr-2 h-4 w-4" />
                      Challenges
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeTab === 'achievements' ? 'bg-quest-card' : ''}`}
                      onClick={() => setActiveTab('achievements')}
                    >
                      <Trophy className="mr-2 h-4 w-4" />
                      Achievements
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeTab === 'learning' ? 'bg-quest-card' : ''}`}
                      onClick={() => setActiveTab('learning')}
                    >
                      <Book className="mr-2 h-4 w-4" />
                      Learning Paths
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeTab === 'playground' ? 'bg-quest-card' : ''}`}
                      onClick={() => setActiveTab('playground')}
                    >
                      <Terminal className="mr-2 h-4 w-4" />
                      Code Playground
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div className="hidden md:block">
              <Button className="w-full bg-quest-primary hover:bg-quest-primary/90">
                <Zap className="mr-2 h-4 w-4" /> Daily Challenge
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            {activeTab === 'dashboard' && (
              <>
                <PlayerStats
                  level={7}
                  xp={320}
                  xpToNextLevel={500}
                  completedChallenges={12}
                  streak={3}
                  learningDays={7}
                  className="animate-scale-fade-in"
                />
                
                <div className="quest-card animate-scale-fade-in" style={{ animationDelay: "100ms" }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold flex items-center">
                      <Zap className="text-quest-accent mr-2 h-5 w-5" /> Popular Challenges
                    </h3>
                    <Button variant="link" className="text-quest-primary p-0">
                      View All
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {challenges.slice(0, 4).map(challenge => (
                      <ChallengeCard
                        key={challenge.id}
                        {...challenge}
                        onClick={() => setActiveTab('playground')}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
            
            {activeTab === 'challenges' && (
              <div className="quest-card animate-scale-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Coding Challenges</h2>
                  <div className="flex">
                    <Button variant="outline" size="sm" className="mr-2">
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      Sort
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {challenges.map((challenge) => (
                    <ChallengeCard
                      key={challenge.id}
                      {...challenge}
                      onClick={() => setActiveTab('playground')}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div className="quest-card animate-scale-fade-in">
                <h2 className="text-xl font-bold mb-6">Your Achievements</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <AchievementBadge 
                    title="First Code" 
                    icon={<Code size={20} />} 
                    unlocked={true} 
                  />
                  <AchievementBadge 
                    title="Streak Master" 
                    icon={<Zap size={20} />} 
                    unlocked={true} 
                  />
                  <AchievementBadge 
                    title="Quick Learner" 
                    icon={<Book size={20} />} 
                    unlocked={true} 
                  />
                  <AchievementBadge 
                    title="Bug Hunter" 
                    icon={<Terminal size={20} />} 
                    progress={3} 
                    totalRequired={5} 
                  />
                  <AchievementBadge 
                    title="JavaScript Pro" 
                    icon={<Award size={20} />} 
                    progress={2} 
                    totalRequired={10} 
                  />
                  <AchievementBadge 
                    title="Community Helper" 
                    icon={<Star size={20} />} 
                    progress={0} 
                    totalRequired={5} 
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'learning' && (
              <div className="space-y-6 animate-scale-fade-in">
                <h2 className="text-xl font-bold">Learning Paths</h2>
                
                {learningPaths.map(path => (
                  <LearningPath 
                    key={path.id}
                    pathName={path.name}
                    steps={path.steps}
                  />
                ))}
              </div>
            )}
            
            {activeTab === 'playground' && (
              <div className="h-[calc(100vh-12rem)] animate-scale-fade-in">
                <Tabs defaultValue="challenge" className="h-full space-y-6">
                  <div className="flex justify-between items-center">
                    <TabsList>
                      <TabsTrigger value="challenge">Challenge: FizzBuzz</TabsTrigger>
                      <TabsTrigger value="playground">Free Playground</TabsTrigger>
                    </TabsList>
                    <Button variant="outline" size="sm">
                      Submit Solution
                    </Button>
                  </div>
                  
                  <TabsContent value="challenge" className="h-[calc(100%-3rem)] space-y-4 mt-0">
                    <div className="quest-card mb-4">
                      <h3 className="font-bold mb-2">FizzBuzz Challenge</h3>
                      <p className="text-sm mb-4">
                        Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number. 
                        For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
                      </p>
                      <div className="text-sm bg-quest-dark rounded p-3 mb-2">
                        <pre className="font-mono">
{`// Example:
// n = 15
// Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`}
                        </pre>
                      </div>
                    </div>
                    
                    <CodeEditor
                      initialCode={`function fizzBuzz(n) {
  // Your code here
  
}

// Test your function
fizzBuzz(15);`}
                    />
                  </TabsContent>
                  
                  <TabsContent value="playground" className="h-[calc(100%-3rem)] mt-0">
                    <CodeEditor initialCode="// Free coding playground\n\n" />
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
