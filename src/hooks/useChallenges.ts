
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Challenge } from '@/types/components';
import { useAuth } from '@/contexts/AuthContext';

export const useChallenges = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const { data: challenges, isLoading } = useQuery({
    queryKey: ['challenges'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('challenges')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error loading challenges",
          description: error.message,
        });
        throw error;
      }

      return data as Challenge[];
    },
  });

  const completeChallenge = useMutation({
    mutationFn: async ({ challengeId, code, xpEarned }: { challengeId: number, code: string, xpEarned: number }) => {
      if (!user) {
        throw new Error("You must be logged in to complete a challenge");
      }

      const { error } = await supabase
        .from('completed_challenges')
        .insert({
          challenge_id: challengeId,
          code,
          xp_earned: xpEarned,
          user_id: user.id
        });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['challenges'] });
      toast({
        title: "Challenge completed!",
        description: "Great job! You've earned XP for completing this challenge.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error completing challenge",
        description: error instanceof Error ? error.message : "An error occurred",
      });
    },
  });

  return {
    challenges,
    isLoading,
    completeChallenge,
  };
};
