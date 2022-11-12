const express = require("express");
const familyRegistrationController = require("../controllers/familyRegistration");

const router = express.Router();

router.post("/", familyRegistrationController.createNewFamily);

module.exports = router;
