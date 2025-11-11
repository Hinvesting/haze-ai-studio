import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  imageId: { type: String, required: true, unique: true },
  shotId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shot', required: true },
  imageUrl: { type: String, required: true },
  version: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Image || mongoose.model('Image', ImageSchema);