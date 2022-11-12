const express = require("express");
const productionHistoryController = require("../controllers/productionHistory");

const router = express.Router();

router.get("/:id", productionHistoryController.listProductionHistory);

module.exports = router;
