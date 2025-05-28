import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    rentalAmount: { type: Number, required: true },
    depositAmount: { type: Number, required: true },
    feesRate: { type: Number, required: true },
    refundAmount: { type: Number, required: true },
    status: {
  type: String,
  enum: ['pending', 'completed'],
  default: 'pending',
}

}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);
