import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
    trainNumber: {
        type: String,
        required: true,
        unique: true
    },
    trainName: {
        type: String,
        required: true,
    },
    classes: [
        {
            classType: {
                type: String,
                required: true,
            },
            seatCount: {
                type: Number,
                required: true,
            }
        }
    ],
    routes: [
        {
            stationName: { type: String, required: true },
            arrivalTime: { type: Date, required: true },
            departureTime: { type: Date, required: true },
            stopNumber: { type: Number, required: true },
        }
    ],
    schedule: {
        startDate: { type: Date, required: true },
        frequency: { type: String, required: true },
    },
    totalSeats: {
        sleeper: { type: Number, default: 0 },
        ac: { type: Number, default: 0 },
        general: { type: Number, default: 0 },
    },
},
    {
        timestamps: { createdAt: true, updatedAt: true }

    }
)
export const Train = mongoose.model('Train', trainSchema)