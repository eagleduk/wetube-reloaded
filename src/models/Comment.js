import mongoose from "mongoose";

const schema = new mongoose.Schema({
  text: { type: String, required: true },
  video: {
    type: mongoose.Types.ObjectId,
    ref: "Video",
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Comment = mongoose.model("Comment", schema);

export default Comment;
