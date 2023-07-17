import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>Poco is comming</h1>");
};

const middleware = (req, res, next) => {
  console.log("Middle ware working!");
  next();
};
const handleLogin = (req, res) => {
  return res.send("Login here");
};

app.get("/", middleware, handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);
