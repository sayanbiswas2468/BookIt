import mongoose from "mongoose";
const seatSchema = mongoose.Schema({
    trainNumber: { type: String, required: true },                    
    date: { type: Date, required: true },                         
    seatMap: {                                                    
        totalSeats: { type: Number, required: true },            
        bookedSeats: { type: [String], default: [] },             
    },
    waitingList: { type: Number, default: 0 },                    
})
export const Seat=mongoose.Model('Seat',seatSchema)