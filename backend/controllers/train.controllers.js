import { Train } from "../models/train.model.js";
export const addTrains = async (req, res) => {
    const { trainNumber, trainName, classes, routes, schedule, totalSeats } = req.body
    try {
        if (!trainNumber || !trainName || !classes || !routes || !schedule || !totalSeats) {
            throw new Error('All fields are required to create a train');
        }
        const trainAlreadyExists = await Train.findOne({ trainNumber })
        if (trainAlreadyExists) {
            return res.status(400).json({ success: false, message: "Train already exists" });
        }
        const train = new Train({
            trainNumber, trainName, classes, routes, schedule, totalSeats
        })
        await train.save()
        return res.status(201).json({
            success: true, message: "Train created successfully", train: {
                train
            }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const updateTrain = async (req, res) => {
    const { trainNumber, trainName, classes, routes, schedule, totalSeats } = req.body
    try {
        const checkTrainNumber = await Train.findOne({ trainNumber })
        if (!checkTrainNumber) {
            return res.status(404).json({ success: false, message: "Train not found" });
        }

        const updatedTrain = await Train.findOneAndUpdate({ trainNumber }, {
            trainNumber, trainName, classes, routes, schedule, totalSeats
        },
            { new: true }
        )
        return res.status(200).json({
            success: true,
            message: "Train updated successfully",
            train: {
                updatedTrain
            }
        })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }

}
export const deleteTrain = async (req, res) => {
    const { trainNumber } = req.body
    try {
        const findTrain = await Train.findOne({ trainNumber })
        if (!findTrain) {
            return res.status(404).json({ success: false, message: "Train not found" });
        }
        await Train.findOneAndDelete({ trainNumber })
        return res.status(200).json({ success: true, message: "Train deleted successfully" })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}