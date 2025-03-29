
import { LucideIcon } from 'lucide-react';

export interface PlayerStatsProps {
  stat: {
    label: string;
    value: number;
    icon: LucideIcon;
  };
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  points: number;
  completionRate: number;
  isCompleted?: boolean;
}

export interface ChallengeCardProps {
  item: Challenge;
}

export interface LearningPathData {
  id: number;
  title: string;
  description: string;
  level: string;
  modules: number;
  duration: string;
  progress: number;
  image?: string;
}

export interface LearningPathProps {
  data: LearningPathData;
}

export interface CodeEditorProps {
  code: string;
  language: string;
}
