import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/emotion_explorer',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-change-me',
  storageBucket: process.env.STORAGE_BUCKET || null,
  enableMockScan: process.env.ENABLE_MOCK_SCAN !== 'false'
};
