import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
  },
  createAt: {
    type: "Date",
    default: Date.now,
  },
  hashtags: [
    {
      type: "String",
      trim: true,
    },
  ],
  meta: {
    view: {
      type: "Number",
      default: 0,
    },
    rating: {
      type: "Number",
      default: 0,
    },
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
});

schema.static("splitHashtages", (hashtags) => {
  return hashtags
    .split(",")
    .map((hashtag) => (hashtag.startsWith("#") ? hashtag : `#${hashtag}`));
});

const Video = mongoose.model("Video", schema);

export default Video;
