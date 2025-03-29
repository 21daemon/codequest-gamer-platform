
import { cn } from "@/lib/utils";

interface AchievementBadgeProps {
  title: string;
  icon: React.ReactNode;
  unlocked?: boolean;
  progress?: number;
  totalRequired?: number;
  className?: string;
}

const AchievementBadge = ({
  title,
  icon,
  unlocked = false,
  progress,
  totalRequired,
  className,
}: AchievementBadgeProps) => {
  const showProgress = !unlocked && progress !== undefined && totalRequired !== undefined;
  const progressPercentage = showProgress ? Math.min(Math.round((progress / totalRequired) * 100), 100) : 0;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center relative mb-2",
          unlocked
            ? "bg-gradient-to-r from-quest-primary to-quest-secondary text-white animate-pulse-glow"
            : "bg-quest-card text-muted-foreground"
        )}
      >
        {showProgress && (
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-quest-card"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="46"
              cx="50"
              cy="50"
            />
            <circle
              className="text-quest-primary transition-all duration-500 ease-out"
              strokeWidth="8"
              strokeDasharray={290}
              strokeDashoffset={290 - (290 * progressPercentage) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="46"
              cx="50"
              cy="50"
            />
          </svg>
        )}
        <div className="z-10">{icon}</div>
      </div>
      <span className="text-xs text-center">{title}</span>
      {showProgress && (
        <span className="text-xs text-muted-foreground">
          {progress}/{totalRequired}
        </span>
      )}
    </div>
  );
};

export default AchievementBadge;
