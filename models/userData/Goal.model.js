const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    prompt1: {
      type: String,
      required: true,
    },
    prompt2: {
      type: String,
      required: true,
    },
    goal: {
      type: Boolean,
      required: true,
      enum: [true, false],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
