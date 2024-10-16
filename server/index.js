import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";

import { findMovies } from "./controllers/findMovie.js";
import { findPerson } from "./controllers/findPerson.js";
import { getMovie } from "./controllers/getMovie.js";
import { getPerson } from "./controllers/getPerson.js";
import { getUserData } from "./controllers/getUserData.js";
import { saveMovies } from "./controllers/saveMovie.js";
import { SavePerson } from "./controllers/savePerson.js";
import { suggestionUser } from "./controllers/suggestionUser.js";
import { getUser } from "./controllers/user.js";

dotenv.config();
const appexpress = express();
const port = process.env.PORT || 3001;

const pusher = new Pusher({
  appId: "1563131",
  key: "9a52b8f05435b6e35101",
  secret: "f7f36d4243b06c8eadb1",
  cluster: "ap2",
  useTLS: true,
});

// middleware
appexpress.use(express.json());
appexpress.use(cors());

// Db config
const connection_Url = process.env.MONGODB_URL;

mongoose
  .connect(connection_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

mongoose.connection.once("open", () => {
  console.log("Db CONNECTED");

  const changeStream = mongoose.connection.collection("movie-data").watch();

  changeStream.on("change", (change) => {
    pusher.trigger("movie-data", "new-movieData", {
      change: change,
    });
  });

  const changePerson = mongoose.connection.collection("person-data").watch();
  changePerson.on("change", (change) => {
    pusher.trigger("person-data", "new-personData", {
      change: change,
    });
  });
});


appexpress.get("/", (req, res) => res.status(200).send("Movie App Build"));
//********----   */
appexpress.post("/user", getUser);
appexpress.get("/user/:id", getUserData);
// ------------- other parts -------------
appexpress.get("/movie/:id", getMovie); // get all movies
appexpress.post("/save/movie", saveMovies);
//  movies part
appexpress.post("/find/movie", findMovies);
appexpress.get("/person/:id", getPerson);
//********----   */
appexpress.post("/save/person", SavePerson);
//********----   */
appexpress.post("/find/person", findPerson);
//********----   */
appexpress.get("/suggestion/:id", suggestionUser);

appexpress.listen(port, () => console.log(`listen on localhost:${port}`));
