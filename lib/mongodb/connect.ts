import mongoose from "mongoose";

let initialized = false;

async function connect(): Promise<void> {

    if (initialized) {
        console.log('Database already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.DB_URL as string);
        console.log("DB connected")
        initialized = true;
    } catch(error) {
        console.log('Database connection error:', error)
    }
}

export default connect