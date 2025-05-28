import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
    maxDepositAmount: { type: Number, required: true },
    feetRate: { type: Number, required: true },
    lastUpdatedBy: { type: String, required: true, trim: true },
}, { timestamps: true });

export default mongoose.model('Settings', settingsSchema);
