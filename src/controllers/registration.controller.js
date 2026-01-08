
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const { v4: uuid } = require("uuid");

exports.registerEvent = async (req, res) => {
  const event = await Event.findById(req.body.eventId);
  if (event.registrationsCount >= event.capacity)
    return res.status(400).json({ msg: "Event full" });

  event.registrationsCount++;
  await event.save();

  const reg = await Registration.create({
    ...req.body,
    ticketId: uuid()
  });
  res.json(reg);
};
