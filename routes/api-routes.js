const db = require("../models");
//const Workout = require("../models/Workout");

module.exports = function (app) {
  // route to view all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    //const { body } = req;
    //const newExercise = new Workout(body);
    console.log("hello!!!!!");
    db.Workout.create({ data: req.body })
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
