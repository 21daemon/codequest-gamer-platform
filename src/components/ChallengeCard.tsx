
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LockIcon, PlayIcon, CheckIcon } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  xpReward: number;
  completed?: boolean;
  locked?: boolean;
  language: string;
  onClick?: () => void;
  className?: string;
}

const ChallengeCard = ({
  title,
  description,
  difficulty,
  xpReward,
  completed = false,
  locked = false,
  language,
  onClick,
  className,
}: ChallengeCardProps) => {
  const difficultyColor = {
    Beginner: "bg-green-500",
    Intermediate: "bg-yellow-500",
    Advanced: "bg-red-500",
  };

  const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow-400 text-black",
    Python: "bg-blue-600",
    HTML: "bg-orange-500",
    CSS: "bg-blue-400",
    "React": "bg-cyan-400 text-black",
    "Node.js": "bg-green-500",
    "TypeScript": "bg-blue-500",
  };

  return (
    <div
      className={cn(
        "quest-card quest-hover-card group relative", 
        locked ? "opacity-60 grayscale" : "hover:border-quest-primary cursor-pointer",
        completed ? "border-quest-success" : "",
        className
      )}
      onClick={locked ? undefined : onClick}
    >
      {locked && (
        <div className="absolute inset-0 flex items-center justify-center bg-quest-dark/70 rounded-lg">
          <LockIcon size={32} className="text-white" />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <Badge className={difficultyColor[difficulty]}>{difficulty}</Badge>
          <Badge className={languageColors[language] || "bg-gray-500"} variant="outline" className="ml-2">
            {language}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          {completed ? (
            <div className="rounded-full bg-quest-success p-1.5">
              <CheckIcon size={16} />
            </div>
          ) : (
            <div className="rounded-full bg-quest-primary opacity-0 group-hover:opacity-100 transition-opacity p-1.5">
              <PlayIcon size={16} />
            </div>
          )}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      
      <div className="flex justify-between items-center text-sm">
        <span className="text-quest-accent font-medium">{xpReward} XP</span>
        {completed && <span className="text-quest-success">Completed</span>}
      </div>
    </div>
  );
};

export default ChallengeCard;
