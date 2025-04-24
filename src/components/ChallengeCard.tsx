
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PlayIcon, CheckIcon } from "lucide-react";
import type { ChallengeCardProps } from "@/types/components";

const ChallengeCard = ({
  challenge,
  onSelect,
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
        challenge.completed ? "border-quest-success" : "hover:border-quest-primary cursor-pointer"
      )}
      onClick={() => onSelect?.(challenge)}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold mb-2">{challenge.title}</h3>
          <Badge className={difficultyColor[challenge.difficulty]}>{challenge.difficulty}</Badge>
          <Badge variant="outline" className={cn("ml-2", languageColors[challenge.category] || "bg-gray-500")}>
            {challenge.category}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          {challenge.completed ? (
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
      
      <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
      
      <div className="flex justify-between items-center text-sm">
        <span className="text-quest-accent font-medium">{challenge.points} XP</span>
        {challenge.completed && <span className="text-quest-success">Completed</span>}
      </div>
    </div>
  );
};

export default ChallengeCard;
