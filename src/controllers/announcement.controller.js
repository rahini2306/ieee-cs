
const Announcement = require("../models/Announcement");

exports.createAnnouncement = async (req, res) => {
  res.json(await Announcement.create(req.body));
};

exports.getAnnouncements = async (req, res) => {
  res.json(await Announcement.find());
};
