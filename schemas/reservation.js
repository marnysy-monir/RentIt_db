import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status: {
        type: String,
        enum: ['pending', 'approved', 'cancelled', 'completed'],
        default: 'pending',
    },
    renter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tool: { type: mongoose.Schema.Types.ObjectId, ref: 'Tool', required: true },
    payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: true },
    returnItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Return', required: true },
}, { timestamps: true });

export default mongoose.model('Reservation', ReservationSchema);
