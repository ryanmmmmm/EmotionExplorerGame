import express from 'express';
import { Entry } from '../models/Entry.js';
import { authenticate } from '../middleware/auth.js';
import { scanText } from '../utils/scanner.js';

const router = express.Router();
const categories = [
  'mood-meter',
  'mind-map',
  'body-awareness',
  'letter',
  'journal',
  'trajectories',
  'spiritual',
  'intentions',
  'collage',
  'next-steps'
];

router.post('/:category', authenticate, async (req, res) => {
  const { category } = req.params;
  if (!categories.includes(category)) return res.status(400).json({ message: 'Unknown category' });
  const scan = scanText(req.body.content);
  const entry = await Entry.create({
    user: req.user._id,
    session: req.body.session,
    category,
    content: req.body.content,
    shared: req.body.shared || false,
    scannedAt: new Date(),
    scanFlags: scan.flags
  });
  res.json({ entry, scan });
});

router.get('/', authenticate, async (req, res) => {
  const { category, shared, from, to } = req.query;
  const filter = { user: req.user._id };
  if (category) filter.category = category;
  if (shared !== undefined) filter.shared = shared === 'true';
  if (from || to) filter.createdAt = {};
  if (from) filter.createdAt.$gte = new Date(from);
  if (to) filter.createdAt.$lte = new Date(to);
  const entries = await Entry.find(filter).sort({ createdAt: -1 });
  res.json(entries);
});

export default router;
