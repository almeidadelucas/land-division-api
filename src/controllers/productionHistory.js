const productionHistoryService = require("../services/productionHistory");
const sequelize = require("../../database");

const listProductionHistory = async (req, res) => {
  try {
    const id = req.params.id;
    const history = await sequelize.query(
      `SELECT Product.name, Production.amount, Production.date FROM Production INNER JOIN Product ON Product.productId = Production.productId WHERE Production.landId = ${id} ORDER BY Production.date`
    );
    res.status(200).json(history);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { listProductionHistory };
