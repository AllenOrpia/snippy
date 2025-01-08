import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SnippetsSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }
  ],
  code: String,
  userName: String
},
{
    timestamps: true
});

const Snippets = mongoose.model("Snippets", SnippetsSchema);

export default Snippets;