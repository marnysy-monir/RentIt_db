import mongoose from 'mongoose';

const returnSchema = new mongoose.Schema({
    toolStatus: {
  type: String,
  enum: ['good', 'damaged', 'lost'],
  required: true
},

    returnDate: { type: Date, required: true },
    amountPaid: { type: Number, required: true },
    refundDate: { type: Date },
    depositRefunded: { type: Boolean, required: true },
}, { timestamps: true });

export default mongoose.model('Return', returnSchema);
