const express = require("express");
const productionController = require("../controllers/productionHistory");

const router = express.Router();

router.get("/:id", productionController.listProductionHistory);

module.exports = router;
