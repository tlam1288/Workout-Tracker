const db = require("../models");
//const Workout = require("../models/Workout");

module.exports = function (app) {
  // route to view all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout.map((w) => w.toObject({ virtuals: true })));
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  //route to create new workouts
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.send(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  //routes to update a workout
  app.put("/api/workouts/:id", (req, res) => {
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
        res.status(400).json(err);
      });
  });

  //gets the stats page
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.send(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
