import mongoose from 'mongoose';
const imageSchema = new mongoose.Schema({
    imagesUrl: [{ type: String, required: true }],
}, { timestamps: true });

export default mongoose.model('Image', imageSchema);
