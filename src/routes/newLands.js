const express = require("express");
const newLandsController = require("../controllers/newLands");

const router = express.Router();

router.post("/", newLandsController.createNewLand);

module.exports = router;
