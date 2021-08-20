const express = require("express");
const router = express.Router();

const { signup, signin, profile } = require("../Controller/userController");
const { details } = require("../Controller/detailsController");

router.get("/signup", signup);
router.post("/signin", signin);
router.post("/details", details);
router.get("/profile", profile);

module.exports = router;
