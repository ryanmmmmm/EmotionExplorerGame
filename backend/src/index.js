import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from './config.js';
import authRoutes from './routes/auth.js';
import sessionRoutes from './routes/sessions.js';
import entryRoutes from './routes/entries.js';
import collageRoutes from './routes/collages.js';
import affirmationRoutes from './routes/affirmations.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/entries', entryRoutes);
app.use('/api/collages', collageRoutes);
app.use('/api/affirmations', affirmationRoutes);

mongoose
  .connect(config.mongoUri)
  .then(() => {
    app.listen(config.port, () => console.log(`API running on port ${config.port}`));
  })
  .catch((err) => {
    console.error('Mongo connection failed', err);
    process.exit(1);
  });
