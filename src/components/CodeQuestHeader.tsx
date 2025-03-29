
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Settings, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Navigation from "./Navigation";

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
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-quest-primary to-quest-secondary">
              CodeQuest
            </span>
            <Badge className="ml-2 bg-quest-accent text-white">Beta</Badge>
          </Link>
        </div>

        <Navigation isMenuOpen={isMenuOpen} />

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-quest-error text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-quest-card border-quest-card/80">
              <DropdownMenuLabel className="text-quest-light">Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-quest-card/80" />
              <div className="max-h-64 overflow-y-auto">
                <DropdownMenuItem className="py-3 cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-foreground">New Challenge Available</span>
                    <span className="text-xs text-muted-foreground">Try the new React State Management challenge!</span>
                    <span className="text-xs text-quest-accent mt-1">2 minutes ago</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-foreground">Achievement Unlocked</span>
                    <span className="text-xs text-muted-foreground">You've earned the 'Code Explorer' badge!</span>
                    <span className="text-xs text-quest-accent mt-1">Yesterday</span>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer border-2 border-quest-primary">
                <AvatarImage src="" alt="Player" />
                <AvatarFallback className="bg-quest-primary text-white">PL</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-quest-card border-quest-card/80">
              <DropdownMenuLabel className="text-quest-light">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-quest-card/80" />
              <DropdownMenuItem className="cursor-pointer hover:bg-quest-primary/20">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-quest-primary/20">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-quest-card/80" />
              <DropdownMenuItem className="cursor-pointer text-quest-error hover:bg-quest-error/20">
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {isMobile && <Navigation isMenuOpen={isMenuOpen} />}
    </header>
  );
};

export default CodeQuestHeader;
