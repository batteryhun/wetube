import Video from "../models/Videos";

export const home = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: "desc" });
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("error", { pageTitle: "There is no Video" });
  }
};
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("error", { pageTitle: "No video" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("error", { pageTitle: "No video" });
  }
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("error", { pageTitle: "No video" });
  }
  const { title, description, hashtag } = req.body;
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtag: Video.hashtagFormat(hashtag),
  });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtag } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtag: Video.hashtagFormat(hashtag),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const searchVideo = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }

  return res.render("search", { pageTitle: "Search", videos });
};
