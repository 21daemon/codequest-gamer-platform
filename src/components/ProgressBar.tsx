
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  maxValue: number;
  label?: string;
  className?: string;
}

const ProgressBar = ({ value, maxValue, label, className }: ProgressBarProps) => {
  const percentage = Math.min(Math.round((value / maxValue) * 100), 100);
  
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between mb-1 text-sm">
          <span>{label}</span>
          <span>{value}/{maxValue}</span>
        </div>
      )}
      <div className="h-2.5 bg-quest-card rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-quest-primary to-quest-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
