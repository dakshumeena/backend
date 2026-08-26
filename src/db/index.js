import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI

        if (!mongoUri) {
            throw new Error("MONGODB_URI is missing in .env")
        }

        const connectionInstance = await mongoose.connect(`${mongoUri}/${DB_NAME}`)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("mongodb connection error:", error)
        process.exit(1)
    }
}

export default connectDB