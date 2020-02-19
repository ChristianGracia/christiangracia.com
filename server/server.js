const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({ origin: true, credentials: true }));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();

const staticFiles = express.static(path.join(__dirname, "../../client/build"));
app.use(staticFiles);

router.get("/api", (req, res) => {
  res.send(
    "Welcome to Nature's Frontier Landscaping's API made by Christian Gracia"
  );
});

app.use(router);

app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
  console.log("mongodb: " + process.env.MONGO);
});

//local
// const database = require("./config/keys").mongoURI;

// //heroku
const database = process.env.MONGO;

mongoose
  .connect(database)
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log("db connection error"));
