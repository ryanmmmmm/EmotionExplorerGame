import express from 'express';
import { Session } from '../models/Session.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/start', authenticate, async (req, res) => {
  const session = await Session.create({ user: req.user._id, metadata: req.body.metadata });
  res.json(session);
});

export default router;
