
const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
  message: String,
  eventId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
