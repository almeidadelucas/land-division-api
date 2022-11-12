const { Product, Production } = require("../models");

const findProductionHistory = () => {
  Product.findAll({
    attributes: ["name"],
  });
};

module.exports = {
  findProductionHistory,
};
