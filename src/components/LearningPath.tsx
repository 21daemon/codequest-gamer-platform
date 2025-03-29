
import { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Trophy, Star, Lock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LearningPathStepProps {
  title: string;
  isActive: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onClick: () => void;
}

const LearningPathStep = ({ 
  title, 
  isActive, 
  isCompleted, 
  isLocked, 
  onClick 
}: LearningPathStepProps) => {
  return (
    <div 
      className={cn(
        "relative flex items-center cursor-pointer py-2 px-4 rounded-md transition-colors",
        isActive ? "bg-quest-card" : "hover:bg-quest-card/50",
        isLocked ? "opacity-60" : ""
      )}
      onClick={isLocked ? undefined : onClick}
    >
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center mr-3",
        isCompleted ? "bg-quest-success" : isLocked ? "bg-quest-card" : "bg-quest-primary"
      )}>
        {isCompleted ? (
          <CheckCircle size={16} className="text-white" />
        ) : isLocked ? (
          <Lock size={16} className="text-quest-light" />
        ) : (
          <Star size={16} className="text-white" />
        )}
      </div>
      <span className={isLocked ? "text-quest-light" : "text-white"}>{title}</span>
      {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-quest-primary rounded-l-md" />}
    </div>
  );
};

interface LearningPathProps {
  pathName: string;
  steps: Array<{
    id: number;
    title: string;
    completed: boolean;
    locked: boolean;
  }>;
  className?: string;
}

const LearningPath = ({ pathName, steps, className }: LearningPathProps) => {
  const [activeStep, setActiveStep] = useState(
    steps.findIndex(step => !step.completed && !step.locked) || 0
  );
  
  const completedSteps = steps.filter(step => step.completed).length;
  const totalSteps = steps.length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);
  
  return (
    <div className={cn("quest-card", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Trophy size={20} className="text-quest-accent mr-2" />
          <h3 className="font-bold">{pathName}</h3>
        </div>
        <span className="text-sm text-quest-light">
          {completedSteps}/{totalSteps} completed
        </span>
      </div>
      
      <div className="h-2 bg-quest-card rounded-full mb-4 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-quest-primary to-quest-accent transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="space-y-2">
        {steps.map((step, index) => (
          <LearningPathStep
            key={step.id}
            title={step.title}
            isActive={index === activeStep}
            isCompleted={step.completed}
            isLocked={step.locked}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
