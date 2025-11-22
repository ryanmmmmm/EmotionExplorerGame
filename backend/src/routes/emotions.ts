import { Router } from 'express';
import { requestCounter } from '../monitoring/metrics';

const router = Router();

const emotions = [
  {
    name: 'Joy',
    description: 'Feeling happy and light.',
    responses: ['Share gratitude', 'Celebrate with friends'],
  },
  {
    name: 'Calm',
    description: 'Peaceful and relaxed.',
    responses: ['Breathe slowly', 'Go for a walk'],
  },
  {
    name: 'Anxiety',
    description: 'Feeling uneasy or nervous about future events.',
    responses: ['Practice grounding', 'Talk to someone supportive'],
  },
];

router.get('/', (req, res) => {
  const { method, baseUrl } = req;
  const status = 200;
  requestCounter.labels(method, baseUrl, status.toString()).inc();
  res.status(status).json(emotions);
});

export default router;
