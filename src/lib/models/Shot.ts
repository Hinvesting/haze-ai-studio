import mongoose from 'mongoose';

const ShotSchema = new mongoose.Schema({
  shotId: { type: String, required: true, unique: true },
  sceneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Scene', required: true },
  shotNumber: { type: Number, required: true },
  shotType: { type: String },
  cameraAngle: { type: String },
  cameraMovement: { type: String },
  shotSize: { type: String },
  description: { type: String },
  status: { type: String, enum: ['todo', 'in_progress', 'done'], default: 'todo' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Shot || mongoose.model('Shot', ShotSchema);