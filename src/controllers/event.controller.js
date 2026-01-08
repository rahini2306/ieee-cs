
const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
};

exports.getEvents = async (req, res) => {
  res.json(await Event.find());
};
