const { Product, Production } = require("../models");

const findProductionHistoryByLandId = (landId) =>
  Production.findAll({
    attributes: ["amount", "date"],
    include: [
      { model: Product, as: "fkProductProduction", attributes: ["name"] },
    ],
    where: { landId },
  });

module.exports = {
  findProductionHistoryByLandId,
};
