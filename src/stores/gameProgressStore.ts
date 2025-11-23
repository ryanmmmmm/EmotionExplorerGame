/**
 * Game Progress Store
 * Manages emotional journeys, module completion, and progression
 */

import { create } from 'zustand';
import type {
  GameProgress,
  EmotionProgress,
  EmotionType,
  ModuleData,
  EmotionPower,
  Achievement,
  SessionState,
} from '@/types';
import { db } from '@/services/storage/database';

interface GameProgressState {
  progress: GameProgress | null;
  currentSession: SessionState | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  initializeProgress: (playerId: string) => Promise<void>;
  saveProgress: () => Promise<void>;
  startEmotionJourney: (emotionId: EmotionType) => void;
  completeModule: (moduleId: number, data: ModuleData) => Promise<void>;
  unlockPower: (power: EmotionPower) => void;
  unlockAchievement: (achievement: Achievement) => void;
  updateCompanionBond: (increment: number) => void;
  getCurrentEmotion: () => EmotionProgress | null;
  getModuleCompletion: (emotionId: EmotionType) => number;
}

export const useGameProgressStore = create<GameProgressState>((set, get) => ({
  progress: null,
  currentSession: null,
  isLoading: false,
  error: null,

  initializeProgress: async (playerId: string) => {
    set({ isLoading: true, error: null });
    try {
      let progress = await db.gameProgress.get(playerId);

      if (!progress) {
        // Create new progress
        progress = {
          playerId,
          emotionsExplored: [],
          totalPlayTime: 0,
          companionBondLevel: 1,
          powersUnlocked: [],
          achievements: [],
          lastSavedAt: new Date(),
        };
        await db.gameProgress.put(progress);
      }

      set({ progress, isLoading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to load progress';
      set({ error: errorMessage, isLoading: false });
      console.error('Error initializing progress:', error);
    }
  },

  saveProgress: async () => {
    const { progress } = get();
    if (!progress) return;

    try {
      const updatedProgress = {
        ...progress,
        lastSavedAt: new Date(),
      };
      await db.gameProgress.put(updatedProgress);
      set({ progress: updatedProgress });
      console.log('✅ Progress saved');
    } catch (error) {
      console.error('❌ Failed to save progress:', error);
      set({
        error: error instanceof Error ? error.message : 'Failed to save progress',
      });
    }
  },

  startEmotionJourney: (emotionId: EmotionType) => {
    const { progress } = get();
    if (!progress) return;

    // Find or create emotion progress
    let emotionProgress = progress.emotionsExplored.find(
      (ep) => ep.emotionId === emotionId
    );

    if (!emotionProgress) {
      // First time exploring this emotion
      emotionProgress = {
        emotionId,
        emotionName: emotionId.charAt(0).toUpperCase() + emotionId.slice(1),
        timesExplored: 1,
        modulesCompleted: Array.from({ length: 9 }, (_, i) => ({
          moduleId: i + 1,
          moduleName: `Module ${i + 1}`,
          completed: false,
          data: {},
          timeSpent: 0,
        })),
        powerLevel: 1,
        firstCompletedAt: new Date(),
        lastCompletedAt: new Date(),
        wisdomCollected: [],
        intensityHistory: [],
      };

      progress.emotionsExplored.push(emotionProgress);
    } else {
      emotionProgress.timesExplored += 1;
      emotionProgress.lastCompletedAt = new Date();
    }

    const newSession: SessionState = {
      emotionId,
      currentModule: 1,
      startedAt: new Date(),
      lastSavedAt: new Date(),
      moduleData: {},
    };

    set({
      progress,
      currentSession: newSession,
    });

    // Auto-save
    get().saveProgress();
  },

  completeModule: async (moduleId: number, data: ModuleData) => {
    const { progress, currentSession } = get();
    if (!progress || !currentSession) return;

    const emotionProgress = progress.emotionsExplored.find(
      (ep) => ep.emotionId === currentSession.emotionId
    );

    if (emotionProgress) {
      const module = emotionProgress.modulesCompleted[moduleId - 1];
      if (module) {
        module.completed = true;
        module.completedAt = new Date();
        module.data = data;

        // Update current module in session
        if (moduleId < 9) {
          currentSession.currentModule = moduleId + 1;
        }
      }

      // Add wisdom if from Module 8
      if (moduleId === 8 && data.lessonsLearned) {
        emotionProgress.wisdomCollected.push(...data.lessonsLearned);
      }

      // Add intensity to history if from Module 1
      if (moduleId === 1 && data.intensity) {
        emotionProgress.intensityHistory.push(data.intensity);
      }
    }

    set({ progress, currentSession });

    // Auto-save
    await get().saveProgress();

    console.log(`✅ Module ${moduleId} completed`);
  },

  unlockPower: (power: EmotionPower) => {
    const { progress } = get();
    if (!progress) return;

    const existing = progress.powersUnlocked.find((p) => p.id === power.id);
    if (!existing) {
      progress.powersUnlocked.push(power);
      set({ progress });
      get().saveProgress();
      console.log(`✨ Power unlocked: ${power.name}`);
    }
  },

  unlockAchievement: (achievement: Achievement) => {
    const { progress } = get();
    if (!progress) return;

    const existing = progress.achievements.find((a) => a.id === achievement.id);
    if (!existing) {
      progress.achievements.push(achievement);
      set({ progress });
      get().saveProgress();
      console.log(`🏆 Achievement unlocked: ${achievement.name}`);
    }
  },

  updateCompanionBond: (increment: number) => {
    const { progress } = get();
    if (!progress) return;

    const newBondLevel = Math.min(4, Math.max(1, progress.companionBondLevel + increment));
    progress.companionBondLevel = newBondLevel;
    set({ progress });
    get().saveProgress();
  },

  getCurrentEmotion: (): EmotionProgress | null => {
    const { progress, currentSession } = get();
    if (!progress || !currentSession) return null;

    return (
      progress.emotionsExplored.find(
        (ep) => ep.emotionId === currentSession.emotionId
      ) || null
    );
  },

  getModuleCompletion: (emotionId: EmotionType): number => {
    const { progress } = get();
    if (!progress) return 0;

    const emotionProgress = progress.emotionsExplored.find(
      (ep) => ep.emotionId === emotionId
    );
    if (!emotionProgress) return 0;

    const completed = emotionProgress.modulesCompleted.filter(
      (m) => m.completed
    ).length;
    return (completed / 9) * 100;
  },
}));
