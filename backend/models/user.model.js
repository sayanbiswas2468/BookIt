import mongoose from "mongoose";
import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    bookingHistory: [
        {
            bookingId:String,
            date:Date,
            destination:String,
            amount:Number,
            status:String
        }

    ],
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
},
    {
        timestamps: true
    })

export const User = mongoose.model('User', userSchema)