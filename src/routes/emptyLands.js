const express = require("express");
const emptyLandController = require("../controllers/emptyLands");

const router = express.Router();

router.get("/", emptyLandController.listEmptyLands);

module.exports = router;

/*Testar atráves da url http://localhost:3000/emptyLands*/