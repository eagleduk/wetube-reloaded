import Video from "../models/Video";
import Comment from "../models/Comment";

export const videoViewEnded = async (req, res) => {
  const {
    params: { id },
  } = req;

  const video = await Video.findById(id);
  video.meta.view += 1;
  await video.save();
  return res.sendStatus(200);
};

export const addVideoComment = async (req, res) => {
  const {
    session: { user },
    body: { text },
    params: { id },
  } = req;

  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404);
  }
  const comment = await Comment.create({
    text,
    owner: user._id,
    video: id,
  });
  video.comments.push(comment._id);
  video.save();
  return res.status(201).json({ newCommentId: comment._id });
};

export const deleteComment = async (req, res) => {
  const {
    params: { id },
  } = req;

  await Comment.findByIdAndRemove(id);
};
