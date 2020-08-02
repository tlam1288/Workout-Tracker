const db = require("../models");

module.exports = function (app) {
  //   db.Workout.create({})
  //     .then((dbWorkout) => {
  //       console.log(dbWorkout);
  //     })
  //     .catch(({ message }) => {
  //       console.log(message);
  //     });
  app.get("/exercise", (req, res) => {
    res.send(exercise.html);
  });

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        console.log(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
