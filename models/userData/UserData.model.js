const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

const dataSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
     goal: {
      type: ObjectId,
      ref: "Goal",
    },
    accommodations: {
      type: ObjectId,
      ref: "Accommodations",
    },
    present: {
      type: ObjectId,
      ref: "Present",
    },
  },
  {
    timestamps: true,
  }
);

const UserData = mongoose.model("UserData", dataSchema);
module.exports = UserData;
