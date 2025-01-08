import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentsSchema = new Schema(
    {
        snippetId: {
            type: Schema.Types.ObjectId,
            ref: 'Snippets'
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        userName: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }, { timestamps: true}
);

const Comments = mongoose.model("Comments", CommentsSchema);
export default Comments;


