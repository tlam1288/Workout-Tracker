const db = require("../models");
//const Workout = require("../models/Workout");

module.exports = function (app) {
  // route to view all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.send(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    //const { body } = req;
    //const newExercise = new Workout(body);
    console.log("post!!!!!" + req);
    db.Workout.create({})
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.send(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    //const { body } = req;
    //const newExercise = new Workout(body);
    console.log("put!!!!!" + req);
    db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
