import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true },
    email: {
        type: String,
        required: true,
        unique: true },
    password: {
        type: String,
        required: true },
    userType: {
        type: String,
        enum: ['client', 'business']},
    bookings: {
        type: Schema.Types.ObjectId,
        ref: 'booking',
        required: true }
    },
 { timestamps: true });

export const UsersCollection = model('users', userSchema);
