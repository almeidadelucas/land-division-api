const { Family } = require("../models");

const createNewFamily = (req_body) =>
  Family.create({
    name: req_body.name,
    chosenState: req_body.chosenState,
    monthlyIncome: req_body.monthlyIncome,
  });

module.exports = {
  createNewFamily,
};
