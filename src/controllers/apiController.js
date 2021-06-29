import Video from "../models/Video";

export const videoViewEnded = async (req, res) => {
  const {
    params: { id },
  } = req;

  const video = await Video.findById(id);
  video.meta.view += 1;
  await video.save();
  return res.sendStatus(200);
};
