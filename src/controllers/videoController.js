const videos = [
  {
    title: "Poco",
    rating: 5,
    comments: 2,
    createdAt: "2min ago",
    views: 59,
    id: 1,
  },
  {
    title: "Onuel",
    rating: 4,
    comments: 3,
    createdAt: "10min ago",
    views: 12,
    id: 2,
  },
  {
    title: "Munji",
    rating: 4,
    comments: 3,
    createdAt: "15min ago",
    views: 1,
    id: 3,
  },
  {
    title: "Agi",
    rating: 5,
    comments: 45,
    createdAt: "1hr ago",
    views: 259,
    id: 4,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Videos");
