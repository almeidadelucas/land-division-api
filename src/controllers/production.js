const productionService = require("../services/production");

const listProductionHistory = async (req, res) => {
  try {
    const id = req.params.id;
    const history =
      await productionService.findProductionHistoryByLandId(id);
    res.status(200).json(history);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { listProductionHistory };
