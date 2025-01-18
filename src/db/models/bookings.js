import { model, Schema } from 'mongoose';

const bookingsSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true },
    business: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true },
    date: {
        type: Date,
        required: true },
    status: {
        type: String,
        enum: ['scheduled', 'cancelled'],
        default: 'scheduled' },
    },
    { timestamps: true });

export const BookingsCollection = model('booking', bookingsSchema);
