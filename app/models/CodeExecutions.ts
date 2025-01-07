import mongoose from "mongoose";

const CodeExecutionsSchema = new mongoose.Schema(
    {
        userId: {
            type: String, required: true
        },
        language: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        output: String,
        error: String
    }, {
        timestamps: true
    }
);

const CodeExecutions = mongoose.model("CodeExecutions", CodeExecutionsSchema);
export default CodeExecutions;