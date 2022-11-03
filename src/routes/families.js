const express = require("express");
const familyController = require("../controllers/family");

const router = express.Router();

router.get("/", familyController.listFamilies);

module.exports = router;
