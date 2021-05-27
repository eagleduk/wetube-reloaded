import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createAt: -1 });
  return res.render("home", { pageTitle: "Home", videos });
};

export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;

  try {
    await Video.create({
      title,
      description,
      hashtags: Video.splitHashtages(hashtags),
    });

    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: error._message,
    });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("video/watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("video/edit", { pageTitle: video.title, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;

  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }

  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.splitHashtages(hashtags),
  });

  return res.redirect(`/video/${id}`);
};

export const remove = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  let videos = [];

  const { keyword } = req.query;
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    }).sort({ createAt: -1 });
  }
  return res.render("search", { pageTitle: "Search Video", videos });
};
