import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const parentalOversightSchema = new mongoose.Schema({
  guardianEmail: String,
  consentGiven: { type: Boolean, default: false },
  notes: String
});

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['user', 'parent', 'admin'], default: 'user' },
    parentalOversight: parentalOversightSchema,
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

userSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const User = mongoose.model('User', userSchema);
