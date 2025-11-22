import express from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { config } from '../config.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password, parentalOversight, role } = req.body;
    const passwordHash = await User.hashPassword(password);
    const user = await User.create({ email, passwordHash, parentalOversight, role });
    const token = jwt.sign({ sub: user._id, role: user.role }, config.jwtSecret, { expiresIn: '7d' });
    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const valid = await user.comparePassword(password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ sub: user._id, role: user.role }, config.jwtSecret, { expiresIn: '7d' });
  res.json({ token, user });
});

export default router;
