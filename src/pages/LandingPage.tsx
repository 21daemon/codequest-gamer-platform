
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  Cpu, 
  Trophy, 
  Users, 
  BookOpen, 
  Star, 
  Shield, 
  Zap, 
  Terminal, 
  ArrowRight, 
  Github, 
  Laptop, 
  CheckCircle, 
  Play, 
  ChevronsDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-dark-gradient text-foreground">
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.1),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.15),transparent_25%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <Badge className="mb-6 bg-quest-primary/20 text-quest-primary border-quest-primary/30 px-4 py-1">
              <Star className="mr-1 h-3 w-3" /> Beta Access Available Now
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-quest-primary via-quest-accent to-quest-secondary bg-clip-text text-transparent animate-scale-fade-in">
              Learn to Code Through <br className="hidden md:block" />
              Exciting Quests
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
              Transform your coding journey into an adventure with interactive challenges, 
              achievements, and a supportive community that makes learning programming fun and engaging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-quest-primary hover:bg-quest-primary/90">
                <Link to="/register" className="flex items-center">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-quest-card hover:bg-quest-card/30">
                <Link to="/login" className="flex items-center">
                  Login <Play className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-quest-primary mr-2" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-quest-primary mr-2" />
                <span>Free Starter Plan</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-quest-primary mr-2" />
                <span>Beginner Friendly</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronsDown className="h-8 w-8 text-quest-light/50" />
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-16 md:py-24 bg-quest-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quest-card text-quest-secondary">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Adventure-Driven Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master coding skills through interactive quests and challenges designed to make learning engaging and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quest-card hover-scale">
              <div className="bg-gradient-to-br from-quest-primary to-quest-secondary/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Challenges</h3>
              <p className="text-muted-foreground">
                Solve real-world coding problems with our interactive editor and get instant feedback.
              </p>
            </div>
            
            <div className="quest-card hover-scale">
              <div className="bg-gradient-to-br from-quest-secondary to-quest-accent/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Achievement System</h3>
              <p className="text-muted-foreground">
                Earn badges and trophies as you progress through different coding challenges and skills.
              </p>
            </div>
            
            <div className="quest-card hover-scale">
              <div className="bg-gradient-to-br from-quest-accent to-quest-success/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Paths</h3>
              <p className="text-muted-foreground">
                Follow structured learning paths tailored to your goals and current skill level.
              </p>
            </div>
            
            <div className="quest-card hover-scale">
              <div className="bg-gradient-to-br from-quest-success to-quest-primary/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Challenges</h3>
              <p className="text-muted-foreground">
                Compete with other learners in weekly challenges and hackathons to test your skills.
              </p>
            </div>
            
            <div className="quest-card hover-scale">
              <div className="bg-gradient-to-br from-quest-warning to-quest-secondary/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Skill Assessment</h3>
              <p className="text-muted-foreground">
                Track your progress with detailed analytics and skill assessments to identify areas for improvement.
              </p>
            </div>
            
            <div className="quest-card hover-scale">
              <div className="bg-gradient-to-br from-quest-error to-quest-warning/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
              <p className="text-muted-foreground">
                Get recommendations based on your learning style, goals, and progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quest-card text-quest-accent">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How CodeQuest Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our game-based learning approach makes mastering programming concepts fun and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-quest-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-quest-primary">1</span>
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-2 border-quest-primary animate-pulse opacity-40"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Your Path</h3>
              <p className="text-muted-foreground">
                Select from various learning paths based on your interests and goals, from web development to data science.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-quest-secondary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-quest-secondary">2</span>
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-2 border-quest-secondary animate-pulse opacity-40"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Challenges</h3>
              <p className="text-muted-foreground">
                Solve progressively difficult coding challenges in our interactive playground with instant feedback.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-quest-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-quest-accent">3</span>
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-2 border-quest-accent animate-pulse opacity-40"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Earn & Progress</h3>
              <p className="text-muted-foreground">
                Gain experience points, unlock achievements, and track your progress as you master new concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Programming Languages */}
      <section className="py-16 md:py-24 bg-quest-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quest-card text-quest-success">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn Multiple Languages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore and master various programming languages and technologies through our interactive platform.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {["JavaScript", "Python", "React", "Node.js", "Java", "HTML/CSS", "TypeScript", "SQL", "Go", "Ruby", "PHP", "C#"].map((lang, index) => (
              <div key={index} className="quest-card flex flex-col items-center text-center p-4 hover-scale">
                <div className="w-12 h-12 rounded-full bg-quest-card flex items-center justify-center mb-3">
                  <Code className="h-6 w-6 text-quest-primary" />
                </div>
                <h3 className="font-medium">{lang}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quest-card text-quest-warning">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Learners Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how CodeQuest has helped developers of all levels improve their coding skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="quest-card hover-scale">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="h-4 w-4 fill-quest-warning text-quest-warning" />
                    ))}
                  </div>
                  <p className="italic mb-6">
                    "CodeQuest made learning JavaScript fun and engaging. The quest-based approach kept me motivated, and I've made incredible progress in just a few months."
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-quest-primary mr-3 flex items-center justify-center">
                    <span className="font-bold text-white">AJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Alex Johnson</h4>
                    <p className="text-sm text-muted-foreground">Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="quest-card hover-scale">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="h-4 w-4 fill-quest-warning text-quest-warning" />
                    ))}
                  </div>
                  <p className="italic mb-6">
                    "The achievement system is brilliant! It keeps me coming back daily and helps me track my progress. I've learned more Python in weeks than I did in months with other platforms."
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-quest-secondary mr-3 flex items-center justify-center">
                    <span className="font-bold text-white">SM</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Mitchell</h4>
                    <p className="text-sm text-muted-foreground">Data Scientist</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="quest-card hover-scale">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="h-4 w-4 fill-quest-warning text-quest-warning" />
                    ))}
                  </div>
                  <p className="italic mb-6">
                    "I love how CodeQuest gamifies the learning experience. The community challenges push me to improve, and the structured paths ensure I'm building skills in the right order."
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-quest-accent mr-3 flex items-center justify-center">
                    <span className="font-bold text-white">RK</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Ryan Kim</h4>
                    <p className="text-sm text-muted-foreground">CS Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Pricing */}
      <section className="py-16 md:py-24 bg-quest-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quest-card text-quest-secondary">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Adventure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible plans designed to support your coding journey, from beginners to professional developers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="quest-card border border-quest-card/50 hover-scale">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Free Explorer</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
                <p className="text-muted-foreground mb-6">Perfect for beginners getting started with coding</p>
                <Separator className="mb-6" />
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Access to 50+ beginner challenges</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Basic achievement tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Community forum access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Code playground</span>
                  </li>
                </ul>
                <Button className="w-full">
                  <Link to="/register" className="w-full">Get Started</Link>
                </Button>
              </div>
            </div>
            
            <div className="quest-card border-2 border-quest-primary relative hover-scale transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-quest-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Quest Adventurer</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$12</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
                <p className="text-muted-foreground mb-6">For dedicated learners ready to level up</p>
                <Separator className="mb-6" />
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>All Free Explorer features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Unlimited access to all challenges</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Personalized learning paths</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Advanced code reviews</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Weekly coding challenges</span>
                  </li>
                </ul>
                <Button className="w-full bg-quest-primary hover:bg-quest-primary/90">
                  <Link to="/register" className="w-full">Start 7-Day Free Trial</Link>
                </Button>
              </div>
            </div>
            
            <div className="quest-card border border-quest-card/50 hover-scale">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Code Master</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
                <p className="text-muted-foreground mb-6">For professionals and serious developers</p>
                <Separator className="mb-6" />
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>All Quest Adventurer features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>1-on-1 mentorship sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Advanced project challenges</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Job preparation resources</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-quest-success mr-2" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  <Link to="/register" className="w-full">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Learning Paths Showcase */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quest-card text-quest-accent">Curriculum</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Learning Paths</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured learning journeys designed to take you from beginner to expert in your chosen field.
            </p>
          </div>
          
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="web">Web Dev</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Dev</TabsTrigger>
              <TabsTrigger value="game">Game Dev</TabsTrigger>
            </TabsList>
            
            <TabsContent value="web" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-primary to-quest-accent h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Frontend Mastery</h3>
                    <p className="text-muted-foreground mb-4">
                      Master HTML, CSS, JavaScript and modern frameworks to build stunning user interfaces.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">42 Challenges</span>
                      <Badge>12 Weeks</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-secondary to-quest-success h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Terminal className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Learn server-side programming, APIs, databases and cloud deployment with Node.js.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">38 Challenges</span>
                      <Badge>10 Weeks</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-accent to-quest-warning h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Full-Stack Journey</h3>
                    <p className="text-muted-foreground mb-4">
                      Become a complete developer by mastering both frontend and backend technologies.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">65 Challenges</span>
                      <Badge>16 Weeks</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="data" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-primary to-quest-secondary h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cpu className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Python for Data Science</h3>
                    <p className="text-muted-foreground mb-4">
                      Learn Python and essential libraries for data analysis and visualization.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">40 Challenges</span>
                      <Badge>10 Weeks</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-secondary to-quest-accent h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Laptop className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Machine Learning Basics</h3>
                    <p className="text-muted-foreground mb-4">
                      Dive into algorithms, statistical models, and ML fundamentals.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">35 Challenges</span>
                      <Badge>12 Weeks</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-accent to-quest-success h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Github className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
                    <p className="text-muted-foreground mb-4">
                      Build data pipelines, ETL processes, and data infrastructure at scale.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">32 Challenges</span>
                      <Badge>8 Weeks</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mobile" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Similar content structure for Mobile Development paths */}
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-warning to-quest-error h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Laptop className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">React Native</h3>
                    <p className="text-muted-foreground mb-4">
                      Build cross-platform mobile apps with React Native and JavaScript.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">36 Challenges</span>
                      <Badge>10 Weeks</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-primary to-quest-secondary h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Laptop className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">iOS Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Create native iOS applications with Swift and SwiftUI.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">40 Challenges</span>
                      <Badge>12 Weeks</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-accent to-quest-success h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Laptop className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Android Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Build Android apps with Kotlin and modern architecture patterns.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">38 Challenges</span>
                      <Badge>11 Weeks</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="game" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Similar content structure for Game Development paths */}
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-secondary to-quest-primary h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Laptop className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Unity Game Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Create 2D and 3D games with Unity and C#.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">45 Challenges</span>
                      <Badge>14 Weeks</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-accent to-quest-warning h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Laptop className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Web Game Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Build games for the web with JavaScript and HTML5 Canvas.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">38 Challenges</span>
                      <Badge>10 Weeks</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="quest-card hover-scale">
                  <div className="bg-gradient-to-br from-quest-warning to-quest-error h-32 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Laptop className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Game Design Fundamentals</h3>
                    <p className="text-muted-foreground mb-4">
                      Learn game mechanics, level design, and player experience principles.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">32 Challenges</span>
                      <Badge>8 Weeks</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section 8: FAQs */}
      <section className="py-16 md:py-24 bg-quest-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quest-card text-quest-secondary">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Common Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answers to frequently asked questions about our platform and learning approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="quest-card">
              <h3 className="text-xl font-bold mb-3">Do I need prior coding experience?</h3>
              <p className="text-muted-foreground">
                Not at all! CodeQuest is designed for learners of all levels. We have beginner-friendly paths that start from absolute basics and gradually progress to more advanced topics.
              </p>
            </div>
            
            <div className="quest-card">
              <h3 className="text-xl font-bold mb-3">How much time should I dedicate?</h3>
              <p className="text-muted-foreground">
                You can learn at your own pace. We recommend at least 3-5 hours per week for steady progress, but our platform adapts to your schedule.
              </p>
            </div>
            
            <div className="quest-card">
              <h3 className="text-xl font-bold mb-3">Can I switch between learning paths?</h3>
              <p className="text-muted-foreground">
                Absolutely! You can explore multiple learning paths simultaneously or switch between them anytime without losing your progress.
              </p>
            </div>
            
            <div className="quest-card">
              <h3 className="text-xl font-bold mb-3">Do I get a certificate?</h3>
              <p className="text-muted-foreground">
                Yes, you'll receive a certificate of completion for each learning path you finish. These certificates showcase the skills you've mastered.
              </p>
            </div>
            
            <div className="quest-card">
              <h3 className="text-xl font-bold mb-3">Can I cancel my subscription?</h3>
              <p className="text-muted-foreground">
                You can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your current billing period.
              </p>
            </div>
            
            <div className="quest-card">
              <h3 className="text-xl font-bold mb-3">How do the challenges work?</h3>
              <p className="text-muted-foreground">
                Challenges are interactive coding exercises with clear requirements. You code your solution in our editor, and we provide instant feedback and test case validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Community */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quest-card text-quest-primary">Community</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow learners, participate in events, and accelerate your growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="quest-card text-center p-8 hover-scale">
              <Users className="h-12 w-12 mx-auto mb-4 text-quest-primary" />
              <h3 className="text-xl font-bold mb-3">50,000+</h3>
              <p className="text-muted-foreground">Active Learners</p>
            </div>
            
            <div className="quest-card text-center p-8 hover-scale">
              <Code className="h-12 w-12 mx-auto mb-4 text-quest-secondary" />
              <h3 className="text-xl font-bold mb-3">500+</h3>
              <p className="text-muted-foreground">Coding Challenges</p>
            </div>
            
            <div className="quest-card text-center p-8 hover-scale">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-quest-accent" />
              <h3 className="text-xl font-bold mb-3">20+</h3>
              <p className="text-muted-foreground">Learning Paths</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Stay updated with the latest challenges, events, and learning resources by joining our newsletter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-quest-card border-quest-card focus:border-quest-primary"
              />
              <Button className="bg-quest-primary hover:bg-quest-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.2),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.25),transparent_30%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quest-primary via-quest-accent to-quest-secondary bg-clip-text text-transparent">
              Begin Your Coding Adventure Today
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of learners who've transformed their coding skills through our interactive, game-based platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-quest-primary hover:bg-quest-primary/90">
                <Link to="/register" className="flex items-center">
                  Start Your Free Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-quest-primary text-quest-primary hover:bg-quest-primary/10">
                <Link to="/login" className="flex items-center">
                  Login to Your Account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-quest-card/50 py-12 border-t border-quest-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-quest-primary to-quest-secondary">CodeQuest</h3>
              <p className="text-muted-foreground mb-4">
                Making coding fun and accessible through game-based learning.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Challenges</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Learning Paths</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Code Playground</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-sm text-muted-foreground text-center">
            <p>&copy; {new Date().getFullYear()} CodeQuest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
