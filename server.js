const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const addHtmlRoutes = require("./routes/html-route.js");
const addWorkoutApiRoutes = require("./routes/api-routes.js");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Timothy-Database',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


//routes
addHtmlRoutes(app);
addWorkoutApiRoutes(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
