import mongoose from 'mongoose';
const ToolSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    pricePerDay: { type: Number, required: true },
    depositAmount: { type: Number, required: true },
    images: { type: mongoose.Schema.Types.ObjectId, ref: 'Images', required: true },
    availability: { type: mongoose.Schema.Types.ObjectId, ref: 'Availability', required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model('Tool', ToolSchema);
