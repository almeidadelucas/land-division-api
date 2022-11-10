const express = require("express");
const landsController = require("../controllers/lands");

const router = express.Router();

router.post("/", landsController.createNewLand);

module.exports = router;
