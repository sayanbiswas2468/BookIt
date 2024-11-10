import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    bookingId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    trainId: { type: String, required: true },
    journeyDate: { type: Date, required: true },
    passengers: [
        {
            name: { type: String, required: true },
            age: { type: Number, required: true },
            gender: { type: String, required: true },
        }
    ],
    seats: { type: [String], required: true },
    status: { type: String, required: true, enum: ["Confirmed", "Waiting", "Cancelled"] },
    pnr: { type: String, unique: true },
    fare: {
        totalAmount: { type: Number, required: true },
        classType: { type: String, required: true },
        quota: { type: String, required: true }
    },
    paymentDetails: {
        paymentId: { type: String, required: true, unique: true },
        amountPaid: { type: Number, required: true },
        paymentDate: { type: Date, required: true },
        paymentStatus: { type: String, required: true, enum: ["Paid", "Pending", "Failed"] }
    },
    createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
