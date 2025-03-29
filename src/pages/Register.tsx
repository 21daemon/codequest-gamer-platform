
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon, ArrowLeft, User, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Password strength indicators
  const passwordHasMinLength = password.length >= 8;
  const passwordHasLetter = /[a-zA-Z]/.test(password);
  const passwordHasNumber = /[0-9]/.test(password);
  const passwordHasSpecial = /[^a-zA-Z0-9]/.test(password);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }
    
    if (!passwordsMatch) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Passwords don't match",
      });
      return;
    }
    
    if (!passwordHasMinLength || !passwordHasLetter || !passwordHasNumber || !passwordHasSpecial) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Password doesn't meet the requirements",
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please accept the terms and conditions",
      });
      return;
    }
    
    // For demonstration, show success toast and redirect
    // In a real app, you would register with a server here
    toast({
      title: "Registration successful!",
      description: "Your account has been created.",
    });
    
    // Simulate registration delay
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dark-gradient flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="quest-card p-8">
          <div className="mb-6 text-center">
            <Link to="/" className="inline-block mb-6 text-muted-foreground hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5 inline mr-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-quest-primary to-quest-accent">
              Join CodeQuest
            </h1>
            <p className="text-muted-foreground">
              Begin your coding adventure today
            </p>
          </div>
          
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                className="bg-quest-dark border-quest-card focus:border-quest-primary"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-quest-dark border-quest-card focus:border-quest-primary"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="bg-quest-dark border-quest-card focus:border-quest-primary pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className={`text-xs flex items-center ${passwordHasMinLength ? 'text-quest-success' : 'text-muted-foreground'}`}>
                  {passwordHasMinLength ? <Check className="h-3 w-3 mr-1" /> : null}
                  At least 8 characters
                </div>
                <div className={`text-xs flex items-center ${passwordHasLetter ? 'text-quest-success' : 'text-muted-foreground'}`}>
                  {passwordHasLetter ? <Check className="h-3 w-3 mr-1" /> : null}
                  Contains letters
                </div>
                <div className={`text-xs flex items-center ${passwordHasNumber ? 'text-quest-success' : 'text-muted-foreground'}`}>
                  {passwordHasNumber ? <Check className="h-3 w-3 mr-1" /> : null}
                  Contains numbers
                </div>
                <div className={`text-xs flex items-center ${passwordHasSpecial ? 'text-quest-success' : 'text-muted-foreground'}`}>
                  {passwordHasSpecial ? <Check className="h-3 w-3 mr-1" /> : null}
                  Contains symbols
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="bg-quest-dark border-quest-card focus:border-quest-primary pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              
              {confirmPassword && (
                <div className={`text-xs flex items-center ${passwordsMatch ? 'text-quest-success' : 'text-quest-error'} mt-1`}>
                  {passwordsMatch ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Passwords match
                    </>
                  ) : (
                    "Passwords don't match"
                  )}
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="accept-terms" 
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                required
              />
              <Label htmlFor="accept-terms" className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-quest-primary hover:text-quest-primary/80 transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-quest-primary hover:text-quest-primary/80 transition-colors">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <Button type="submit" className="w-full bg-quest-primary hover:bg-quest-primary/90">
              <User className="mr-2 h-4 w-4" /> Create Account
            </Button>
          </form>
          
          <div className="relative flex items-center justify-center mt-8">
            <div className="border-t border-quest-card absolute w-full"></div>
            <span className="bg-quest-card px-2 z-10 text-sm text-muted-foreground">
              OR
            </span>
          </div>
          
          <div className="mt-6 space-y-4">
            <Button variant="outline" className="w-full border-quest-card hover:bg-quest-card/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
              </svg>
              Continue with Google
            </Button>
            
            <Button variant="outline" className="w-full border-quest-card hover:bg-quest-card/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Continue with GitHub
            </Button>
          </div>
          
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-quest-primary hover:text-quest-primary/80 transition-colors">
                Sign in
              </Link>
            </p>
            
            <Badge variant="outline" className="bg-quest-primary/10 text-quest-primary border-quest-primary/20">
              Free account - No credit card required
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
