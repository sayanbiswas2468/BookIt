import express from 'express'
import { addTrains, deleteTrain, updateTrain } from '../controllers/train.controllers.js'
const router = express.Router()

router.post('/add-train', addTrains)
router.put('/add-train', updateTrain)
router.delete('/add-train', deleteTrain)
export default router