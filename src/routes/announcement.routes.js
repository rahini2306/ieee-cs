
const router = require("express").Router();
const c = require("../controllers/announcement.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.post("/", auth, role("admin"), c.createAnnouncement);
router.get("/", c.getAnnouncements);

module.exports = router;
