import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
    category: {
      type: String,
      enum: [
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
      ],
      required: true
    },
    content: {},
    shared: { type: Boolean, default: false },
    scannedAt: Date,
    scanFlags: [String]
  },
  { timestamps: true }
);

export const Entry = mongoose.model('Entry', entrySchema);
