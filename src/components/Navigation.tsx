
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Gamepad2, Code, Trophy, Book, Users } from "lucide-react";

interface NavigationItemProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
  mobile?: boolean;
  isActive?: boolean;
}

const NavigationItem = ({ to, label, icon, mobile = false, isActive }: NavigationItemProps) => (
  <li className={mobile ? 'py-2' : ''}>
    <Link 
      to={to} 
      className={`text-quest-light hover:text-white transition-colors flex items-center gap-2 ${
        mobile ? 'py-2 px-4 w-full' : ''
      } ${isActive ? 'text-white font-medium' : ''}`}
    >
      {icon}
      {label}
    </Link>
  </li>
);

interface NavigationProps {
  isMenuOpen?: boolean;
}

const Navigation = ({ isMenuOpen }: NavigationProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (isMobile) {
    return (
      <nav className={`
        absolute top-full left-0 w-full bg-quest-card/95 backdrop-blur-md border-b border-quest-card 
        transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        z-20
      `}>
        <ul className="flex flex-col p-4">
          <NavigationItem to="/dashboard" label="Challenges" icon={<Code size={18} />} mobile isActive={isActive('/dashboard')} />
          <NavigationItem to="/leaderboard" label="Leaderboard" icon={<Trophy size={18} />} mobile isActive={isActive('/leaderboard')} />
          <NavigationItem to="/community" label="Community" icon={<Users size={18} />} mobile isActive={isActive('/community')} />
          <NavigationItem to="/resources" label="Resources" icon={<Book size={18} />} mobile isActive={isActive('/resources')} />
        </ul>
      </nav>
    );
  }

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/dashboard" className={cn(navigationMenuTriggerStyle(), "bg-transparent", isActive('/dashboard') ? "bg-quest-primary/20" : "")}>
            <Gamepad2 className="mr-2 h-4 w-4" />
            Challenges
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn("bg-transparent", isActive('/resources') ? "bg-quest-primary/20" : "")}>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-quest-card border border-quest-card/50">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-quest-primary/50 to-quest-secondary/50 p-6 no-underline outline-none focus:shadow-md"
                    href="/resources"
                  >
                    <Book className="h-6 w-6 mb-2" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Learning Paths
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Structured learning journeys to master different programming technologies
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/resources"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Documentation</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Official guides and API references
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/resources"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Tutorials</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Step-by-step guides for beginners and experts
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/resources"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Blog</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Latest news and articles from the CodeQuest team
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/leaderboard" className={cn(navigationMenuTriggerStyle(), "bg-transparent", isActive('/leaderboard') ? "bg-quest-primary/20" : "")}>
            <Trophy className="mr-2 h-4 w-4" />
            Leaderboard
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/community" className={cn(navigationMenuTriggerStyle(), "bg-transparent", isActive('/community') ? "bg-quest-primary/20" : "")}>
            <Users className="mr-2 h-4 w-4" />
            Community
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { Navigation, NavigationItem };
export default Navigation;
