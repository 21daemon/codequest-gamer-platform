
import { LucideIcon } from 'lucide-react';

export interface PlayerStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  completedChallenges: number;
  streak: number;
  learningDays: number;
}

export interface PlayerStatsProps {
  stats: PlayerStats;
  className?: string;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: string;  // Changed from union type to string to match database
  category: string;
  points: number;
  starter_code?: string | null;
  solution_code?: string | null;
  test_cases?: any;
  completed?: boolean;
  created_at?: string | null;
}

export interface ChallengeCardProps {
  challenge: Challenge;
  onSelect?: (challenge: Challenge) => void;
}

export interface LearningPathData {
  id: number;
  title: string;
  description: string;
  level: string;
  modules: number;
  duration: string;
  progress?: number;
  image_url?: string;
}

export interface LearningPathProps {
  learningPath: LearningPathData;
}

export interface CodeEditorProps {
  initialCode: string;
  language: string;
  onRun?: (code: string) => void;
  onReset?: () => void;
  className?: string;
  testCases?: any[];
  challenge?: any;
}
