/**
 * Companion Store
 * Manages AI companion state, conversation, and LLM integration
 */

import { create } from 'zustand';
import type {
  CompanionState,
  ConversationMessage,
  MessageContext,
} from '@/types';
import { db } from '@/services/storage/database';

interface CompanionStoreState {
  state: CompanionState | null;
  chatOpen: boolean;
  isTyping: boolean;
  error: string | null;

  // Actions
  initializeCompanion: (playerId: string, name: string) => Promise<void>;
  setChatOpen: (open: boolean) => void;
  addMessage: (message: ConversationMessage) => void;
  sendMessage: (text: string, context: MessageContext) => Promise<string>;
  clearHistory: () => void;
  updateBondLevel: (level: number) => void;
}

export const useCompanionStore = create<CompanionStoreState>((set, get) => ({
  state: null,
  chatOpen: false,
  isTyping: false,
  error: null,

  initializeCompanion: async (playerId: string, name: string) => {
    try {
      let companionState = await db.companionState.get(playerId);

      if (!companionState) {
        companionState = {
          playerId,
          name,
          bondLevel: 1,
          conversationHistory: [],
          personalityTraits: ['supportive', 'wise', 'gentle'],
          appearanceEvolution: 0,
          totalInteractions: 0,
          lastInteractionAt: new Date(),
        };
        await db.companionState.put(companionState);
      }

      set({ state: companionState });
      console.log(`✅ Companion "${name}" initialized`);
    } catch (error) {
      console.error('Failed to initialize companion:', error);
      set({
        error:
          error instanceof Error ? error.message : 'Failed to load companion',
      });
    }
  },

  setChatOpen: (open: boolean) => {
    set({ chatOpen: open });
  },

  addMessage: (message: ConversationMessage) => {
    const { state } = get();
    if (!state) return;

    state.conversationHistory.push(message);
    state.lastInteractionAt = new Date();
    state.totalInteractions += 1;

    set({ state });

    // Save to database
    db.companionState.put(state).catch((error) => {
      console.error('Failed to save message:', error);
    });
  },

  sendMessage: async (text: string, context: MessageContext): Promise<string> => {
    const { state } = get();
    if (!state) return 'Companion not initialized';

    // Add player message
    const playerMessage: ConversationMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sender: 'player',
      text,
      timestamp: new Date(),
      context,
    };
    get().addMessage(playerMessage);

    // Show typing indicator
    set({ isTyping: true });

    try {
      // Import LLM service dynamically (will create this next)
      const { claudeService } = await import('@/services/llm/claudeService');
      const response = await claudeService.sendMessage(
        text,
        state.conversationHistory,
        context
      );

      // Add companion response
      const companionMessage: ConversationMessage = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        sender: 'companion',
        text: response,
        timestamp: new Date(),
        context,
      };
      get().addMessage(companionMessage);

      set({ isTyping: false });
      return response;
    } catch (error) {
      console.error('Failed to get companion response:', error);
      set({ isTyping: false, error: 'Failed to connect with companion' });

      // Fallback response
      const fallbackResponse =
        "I'm having trouble connecting right now. Can you tell me more about what you're experiencing?";
      const companionMessage: ConversationMessage = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        sender: 'companion',
        text: fallbackResponse,
        timestamp: new Date(),
        context,
      };
      get().addMessage(companionMessage);

      return fallbackResponse;
    }
  },

  clearHistory: () => {
    const { state } = get();
    if (!state) return;

    state.conversationHistory = [];
    set({ state });

    db.companionState.put(state).catch((error) => {
      console.error('Failed to clear history:', error);
    });
  },

  updateBondLevel: (level: number) => {
    const { state } = get();
    if (!state) return;

    state.bondLevel = Math.min(4, Math.max(1, level));
    state.appearanceEvolution = state.bondLevel - 1;
    set({ state });

    db.companionState.put(state).catch((error) => {
      console.error('Failed to update bond level:', error);
    });
  },
}));
