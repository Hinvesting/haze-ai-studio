import mongoose from 'mongoose';

const SceneSchema = new mongoose.Schema({
  sceneId: { type: String, required: true, unique: true },
  storyboardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Storyboard', required: true },
  sceneNumber: { type: Number, required: true },
  title: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Scene || mongoose.model('Scene', SceneSchema);