import mongoose from 'mongoose';

const moderationStateSchema = new mongoose.Schema(
  {
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reviewedAt: Date,
    notes: String
  },
  { _id: false }
);

const collageSchema = new mongoose.Schema(
  {
    entry: { type: mongoose.Schema.Types.ObjectId, ref: 'Entry', required: true },
    imageData: String, // base64 inline fallback
    storageKey: String, // reference to cloud bucket key
    metadata: {
      creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      createdAt: { type: Date, default: Date.now },
      sharingStatus: { type: String, enum: ['private', 'shared'], default: 'private' }
    },
    moderation: moderationStateSchema
  },
  { timestamps: true }
);

export const Collage = mongoose.model('Collage', collageSchema);
