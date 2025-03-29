
import { useState } from 'react';
import { Bell, User, Settings, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const CodeQuestHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="bg-quest-card/80 backdrop-blur-md border-b border-quest-card shadow-md py-3 px-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          )}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-quest-primary to-quest-secondary">
              CodeQuest
            </span>
            <Badge className="ml-2 bg-quest-accent text-white">Beta</Badge>
          </div>
        </div>

        <nav className={`${isMobile ? 
          `absolute top-full left-0 w-full bg-quest-card/95 backdrop-blur-md border-b border-quest-card transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}` 
          : 'flex items-center'}`}
        >
          <ul className={`${isMobile ? 'flex flex-col p-4' : 'flex items-center gap-6'}`}>
            <li className={`${isMobile ? 'py-2' : ''}`}>
              <a href="#" className="text-quest-light hover:text-white transition-colors">Challenges</a>
            </li>
            <li className={`${isMobile ? 'py-2' : ''}`}>
              <a href="#" className="text-quest-light hover:text-white transition-colors">Leaderboard</a>
            </li>
            <li className={`${isMobile ? 'py-2' : ''}`}>
              <a href="#" className="text-quest-light hover:text-white transition-colors">Community</a>
            </li>
            <li className={`${isMobile ? 'py-2' : ''}`}>
              <a href="#" className="text-quest-light hover:text-white transition-colors">Resources</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-quest-error text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </Button>
          
          <Avatar className="cursor-pointer border-2 border-quest-primary">
            <AvatarImage src="" alt="Player" />
            <AvatarFallback className="bg-quest-primary text-white">PL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default CodeQuestHeader;
