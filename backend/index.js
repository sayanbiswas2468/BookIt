import dotenv from 'dotenv'
import express from 'express'
import {connectDB} from './db/connectDB.js'
dotenv.config()

const app = express()
app.use(express.json());
connectDB()


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})