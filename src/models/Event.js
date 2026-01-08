
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  capacity: Number,
  registrationsCount: { type: Number, default: 0 },
  isTeamEvent: Boolean,
  minTeamSize: Number,
  maxTeamSize: Number
});

module.exports = mongoose.model("Event", EventSchema);
