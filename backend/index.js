import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './db/connectDB.js'
import router from './routes/user.routes.js'
dotenv.config()


const app = express()
app.use(express.json());

app.use("/api/auth", router);


const PORT = process.env.PORT
app.listen(PORT, () => {
    connectDB()
    console.log(`Server is listening on port ${PORT}`)
})