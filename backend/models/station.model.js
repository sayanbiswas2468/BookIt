import mongoose from "mongoose";
const staionSchema = new mongoose.Schema({
    name: { type: String, required: true },                    
    code: { type: String, required: true, unique: true },      
})
export const Station=mongoose.model('Station',staionSchema)