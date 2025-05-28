import mongoose from 'mongoose';

const withdrawlSchema = new mongoose.Schema({
    amountPaid: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    status: {
        type: String,
        enum: ['requested', 'processed'],
        default: 'requested',
    },
}, { timestamps: true });

export default mongoose.model('Withdrawal', withdrawlSchema);
