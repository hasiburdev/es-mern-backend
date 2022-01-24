import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.model("albums", albumSchema);
