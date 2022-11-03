const { Family } = require("../models");

const findAllFamilies = () => Family.findAll();

module.exports = {
	findAllFamilies,
};
