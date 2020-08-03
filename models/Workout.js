const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
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

WorkoutSchema.virtual("total duration").get(function () {
  return this.duration + duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
