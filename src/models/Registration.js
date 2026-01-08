
const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  eventId: mongoose.Schema.Types.ObjectId,
  teamMembers: [String],
  ticketId: String
});

module.exports = mongoose.model("Registration", RegistrationSchema);
