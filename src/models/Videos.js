import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 20 },
  fileUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, minLength: 10 },
  createdAt: { type: Date, default: Date.now },
  hashtag: [{ type: String, required: true, trim: true }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

// if you use middleware below like that!
// videoSchema.pre("save", async function () {
//   this.hashtag = this.hashtag[0]
//     .split(",")
//     .map((word) => (word.startsWith("#") ? word.trim() : `#${word.trim()}`));
// });

videoSchema.static("hashtagFormat", function (hashtag) {
  return hashtag
    .split(",")
    .map((word) => (word.startsWith("#") ? word.trim() : `#${word.trim()}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
