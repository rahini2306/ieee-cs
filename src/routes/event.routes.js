
const router = require("express").Router();
const c = require("../controllers/event.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.post("/", auth, role("admin"), c.createEvent);
router.get("/", c.getEvents);

module.exports = router;
