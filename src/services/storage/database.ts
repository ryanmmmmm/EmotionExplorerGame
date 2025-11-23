/**
 * IndexedDB Database
 * Local storage for all game data using Dexie.js
 */

import Dexie, { Table } from 'dexie';
import type {
  PlayerProfile,
  GameProgress,
  EmotionProgress,
  CompanionState,
  SessionState,
} from '@/types';

export class EmotionExplorerDB extends Dexie {
  playerProfiles!: Table<PlayerProfile, string>;
  gameProgress!: Table<GameProgress, string>;
  emotionProgress!: Table<EmotionProgress, string>;
  companionState!: Table<CompanionState, string>;
  savedSessions!: Table<SessionState, string>;

  constructor() {
    super('EmotionExplorerDB');

    // Define database schema
    this.version(1).stores({
      playerProfiles: 'id, name, lastPlayed',
      gameProgress: 'playerId, lastSavedAt',
      emotionProgress: '[playerId+emotionId], playerId, emotionId',
      companionState: 'playerId, name',
      savedSessions: 'playerId, emotionId',
    });
  }
}

// Create singleton database instance
export const db = new EmotionExplorerDB();

// Initialize database with default values if needed
export async function initializeDatabase(): Promise<void> {
  try {
    await db.open();
    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize database:', error);
    throw error;
  }
}

// Clear all data (for testing or reset)
export async function clearAllData(): Promise<void> {
  try {
    await db.delete();
    await db.open();
    console.log('✅ All data cleared');
  } catch (error) {
    console.error('❌ Failed to clear data:', error);
    throw error;
  }
}
