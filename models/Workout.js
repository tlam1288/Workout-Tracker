const mongoose = require("mongoose");
//const Resistance = require("./Resistance"),
//const Cardio =  require("./Cardio"),

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // CODE HERE
  date: {
    type: Date,
  },

  exercises: {
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    duration: {
      type: Number,
    },
  },
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
