import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handleError = (error) => console.log(error);
const handleOpen = () => console.log("MongoDB is connected!");

db.on("error", handleError);
db.once("open", handleOpen);
