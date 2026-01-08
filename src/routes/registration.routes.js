
const router = require("express").Router();
const c = require("../controllers/registration.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, c.registerEvent);

module.exports = router;
