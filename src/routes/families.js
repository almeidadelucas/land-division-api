const express = require("express");
const familyController = require("../controllers/family");

const router = express.Router();

router.get("/", familyController.listFamilies);
router.post("/", familyController.createNewFamily);

module.exports = router;
