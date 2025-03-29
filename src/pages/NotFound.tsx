
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark-gradient flex flex-col items-center justify-center p-4">
      <div className="text-center animate-scale-fade-in">
        <div className="relative mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-quest-primary to-quest-accent bg-clip-text text-transparent">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-quest-card opacity-20 animate-pulse-glow"></div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Quest Not Found</h1>
        
        <p className="text-xl text-quest-light mb-8 max-w-md mx-auto">
          The coding challenge you're looking for has vanished into cyberspace. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.location.href = "/"} className="bg-quest-primary hover:bg-quest-primary/90">
            <Home className="mr-2 h-4 w-4" /> Return to Dashboard
          </Button>
          <Button variant="outline" onClick={() => window.location.reload()}>
            <RefreshCw className="mr-2 h-4 w-4" /> Reload Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
