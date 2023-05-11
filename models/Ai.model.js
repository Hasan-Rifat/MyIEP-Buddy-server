const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatGPT = new Schema({
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
});

const Ai = mongoose.model("Ai", ChatGPT);

module.exports = Ai;
