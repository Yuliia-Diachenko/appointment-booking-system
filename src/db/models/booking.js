import { Schema } from 'mongoose';

const bookingSchema = new Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['scheduled', 'cancelled'], default: 'scheduled' }, });

module.exports = mongoose.model('booking', bookingSchema);
