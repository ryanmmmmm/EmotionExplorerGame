import express from 'express';
import multer from 'multer';
import { Collage } from '../models/Collage.js';
import { Entry } from '../models/Entry.js';
import { authenticate, requireRole } from '../middleware/auth.js';
import { scanImagePlaceholder } from '../utils/scanner.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/', authenticate, upload.single('file'), async (req, res) => {
  const { entryId, imageData, sharingStatus } = req.body;
  const entry = await Entry.findById(entryId);
  if (!entry) return res.status(404).json({ message: 'Entry not found' });
  if (entry.category !== 'collage') return res.status(400).json({ message: 'Entry must be collage type' });

  const scan = scanImagePlaceholder();
  const base64 = imageData || req.file?.buffer?.toString('base64');
  const collage = await Collage.create({
    entry: entry._id,
    imageData: base64,
    metadata: {
      creator: req.user._id,
      sharingStatus: sharingStatus || 'private'
    },
    moderation: { status: sharingStatus === 'shared' ? 'pending' : 'approved' }
  });

  res.json({ collage, scan });
});

router.get('/gallery', authenticate, async (req, res) => {
  const gallery = await Collage.find({ 'metadata.sharingStatus': 'shared', 'moderation.status': 'approved' })
    .populate('entry')
    .populate('metadata.creator', 'email');
  res.json(gallery);
});

router.get('/moderation', authenticate, requireRole('admin', 'parent'), async (req, res) => {
  const pending = await Collage.find({ 'metadata.sharingStatus': 'shared', 'moderation.status': 'pending' }).populate('metadata.creator', 'email');
  res.json(pending);
});

router.post('/:id/approve', authenticate, requireRole('admin', 'parent'), async (req, res) => {
  const collage = await Collage.findByIdAndUpdate(
    req.params.id,
    { moderation: { status: 'approved', reviewedBy: req.user._id, reviewedAt: new Date(), notes: req.body.notes } },
    { new: true }
  );
  res.json(collage);
});

router.post('/:id/reject', authenticate, requireRole('admin', 'parent'), async (req, res) => {
  const collage = await Collage.findByIdAndUpdate(
    req.params.id,
    { moderation: { status: 'rejected', reviewedBy: req.user._id, reviewedAt: new Date(), notes: req.body.notes } },
    { new: true }
  );
  res.json(collage);
});

export default router;
