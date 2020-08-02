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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// {
//     day: new Date(new Date().setDate(new Date().getDate() - 10)),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },

// {
//     day: new Date(new Date().setDate(new Date().getDate() - 9)),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Lateral Pull",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
