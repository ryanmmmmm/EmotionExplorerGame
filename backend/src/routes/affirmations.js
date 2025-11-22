import express from 'express';

const router = express.Router();
const affirmations = [
  'You are capable of learning from every feeling.',
  'Your emotions are valid and worth exploring.',
  'Taking a pause helps you understand yourself.',
  'You can choose how to respond to difficult moments.',
  'Kindness toward yourself opens room for growth.'
];

router.get('/random', (_req, res) => {
  const pick = affirmations[Math.floor(Math.random() * affirmations.length)];
  res.json({ affirmation: pick });
});

export default router;
