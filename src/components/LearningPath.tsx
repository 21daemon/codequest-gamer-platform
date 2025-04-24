
import { useState } from 'react';
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LearningPathProps } from "@/types/components";

const LearningPath = ({ learningPath }: LearningPathProps) => {
  const progressPercentage = learningPath.progress || 0;
  
  return (
    <div className="quest-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Trophy size={20} className="text-quest-accent mr-2" />
          <h3 className="font-bold">{learningPath.title}</h3>
        </div>
        <span className="text-sm text-quest-light">
          {progressPercentage}% completed
        </span>
      </div>
      
      <div className="h-2 bg-quest-card rounded-full mb-4 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-quest-primary to-quest-accent transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{learningPath.description}</p>
        <div className="flex justify-between text-sm text-quest-light">
          <span>{learningPath.level}</span>
          <span>{learningPath.modules} modules • {learningPath.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
