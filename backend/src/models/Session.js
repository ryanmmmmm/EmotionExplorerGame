import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startedAt: { type: Date, default: Date.now },
    metadata: Object
  },
  { timestamps: true }
);

export const Session = mongoose.model('Session', sessionSchema);
