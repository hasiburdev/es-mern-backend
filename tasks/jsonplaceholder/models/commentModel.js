import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

export default mongoose.model("comments", commentSchema);
