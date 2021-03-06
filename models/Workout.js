const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
    },
  ],
});

WorkoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  this.exercises.forEach((e) => {
    total += e.duration;
  });
  return total;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
