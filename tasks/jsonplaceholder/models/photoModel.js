import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  albumId: {
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
  url: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model("photos", photoSchema);
