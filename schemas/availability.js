import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema({
    availabilityType: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    specificDays: [{ type: String }],
    recurring: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Availability', availabilitySchema);
