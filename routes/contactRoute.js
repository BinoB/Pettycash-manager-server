const express = require("express");
const { contactUs } = require("../controllers/contactController");
const router = express.Router();

router.post("/",  contactUs);

module.exports = router;




/* const express = require("express");
const { contactUs } = require("../controllers/contactController");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");

router.post("/", protect, contactUs);

module.exports = router; */