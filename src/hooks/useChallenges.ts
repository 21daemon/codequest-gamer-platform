
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
      // Get all challenges
      const { data: challengesData, error: challengesError } = await supabase
        .from('challenges')
        .select('*')
        .order('id', { ascending: true });

      if (challengesError) {
        toast({
          variant: "destructive",
          title: "Error loading challenges",
          description: challengesError.message,
        });
        throw challengesError;
      }

      // If user is authenticated, get their completed challenges
      if (user) {
        const { data: completedChallenges, error: completedError } = await supabase
          .from('completed_challenges')
          .select('challenge_id')
          .eq('user_id', user.id);

        if (completedError) {
          console.error("Error fetching completed challenges:", completedError);
        } else if (completedChallenges) {
          // Mark challenges as completed if they're in the completed list
          const completedIds = completedChallenges.map(c => c.challenge_id);
          challengesData.forEach(challenge => {
            challenge.completed = completedIds.includes(challenge.id);
          });
        }
      }

      return challengesData as Challenge[];
    },
    enabled: true, // Always fetch challenges, even if not logged in
  });

  // Get user stats (XP, level, streak)
  const { data: userStats, isLoading: isLoadingStats } = useQuery({
    queryKey: ['userStats'],
    queryFn: async () => {
      if (!user) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error("Error fetching user stats:", error);
        return null;
      }

      return data;
    },
    enabled: !!user,
  });

  const completeChallenge = useMutation({
    mutationFn: async ({ challengeId, code, xpEarned }: { challengeId: number, code: string, xpEarned: number }) => {
      if (!user) {
        throw new Error("You must be logged in to complete a challenge");
      }

      // First insert the completed challenge
      const { error: insertError } = await supabase
        .from('completed_challenges')
        .insert({
          challenge_id: challengeId,
          code,
          xp_earned: xpEarned,
          user_id: user.id
        });

      if (insertError) throw insertError;

      // Then update user's XP in profile
      const { error: updateError } = await supabase
        .rpc('increment_user_xp', { 
          user_id_param: user.id,
          xp_amount: xpEarned
        });

      if (updateError) {
        console.error("Error updating user XP:", updateError);
        // Don't throw here, as the challenge completion was successful
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['challenges'] });
      queryClient.invalidateQueries({ queryKey: ['userStats'] });
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
    userStats,
    isLoadingStats,
    completeChallenge,
  };
};
