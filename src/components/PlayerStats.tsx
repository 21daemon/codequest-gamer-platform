
import { Trophy, Zap, Book, Clock } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";

interface PlayerStatsProps {
  level: number;
  xp: number;
  xpToNextLevel: number;
  completedChallenges: number;
  streak: number;
  learningDays: number;
  className?: string;
}

const PlayerStats = ({
  level,
  xp,
  xpToNextLevel,
  completedChallenges,
  streak,
  learningDays,
  className,
}: PlayerStatsProps) => {
  return (
    <div className={cn("quest-card space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Your Progress</h3>
        <div className="text-lg font-bold text-quest-primary">Level {level}</div>
      </div>
      
      <ProgressBar
        value={xp}
        maxValue={xpToNextLevel}
        label="Experience"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="flex items-center">
          <div className="rounded-full bg-quest-primary/20 p-2 mr-3">
            <Trophy size={18} className="text-quest-primary" />
          </div>
          <div>
            <div className="text-quest-light text-xs">Challenges</div>
            <div className="font-medium">{completedChallenges}</div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="rounded-full bg-quest-success/20 p-2 mr-3">
            <Zap size={18} className="text-quest-success" />
          </div>
          <div>
            <div className="text-quest-light text-xs">Current Streak</div>
            <div className="font-medium">{streak} days</div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="rounded-full bg-quest-accent/20 p-2 mr-3">
            <Clock size={18} className="text-quest-accent" />
          </div>
          <div>
            <div className="text-quest-light text-xs">Learning Time</div>
            <div className="font-medium">{learningDays} days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
