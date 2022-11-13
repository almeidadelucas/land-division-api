const productionHistoryService = require("../services/productionHistory");

const listProductionHistory = async (req, res) => {
  try {
    const id = req.params.id;
    const history =
      await productionHistoryService.findProductionHistoryByLandId(id);
    res.status(200).json(history);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { listProductionHistory };
