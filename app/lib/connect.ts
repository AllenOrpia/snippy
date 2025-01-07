import mongoose from "mongoose";

async function connect(): Promise<void> {
    try {
        await mongoose.connect(process.env.DB_URL as string);
        console.log("DB connected")
    } catch(error) {
        console.log(error)
    }
}

export default connect