const { Land } = require("../models");
const { Op } = require("sequelize");

const findAllAvalibleLands = () =>
	Land.findAll({
		attributes: ["state", "city", "address", "hectare"],
		where: {
            familyid: {
                [Op.is]: null
            }
        }
	});

module.exports = {
	findAllAvalibleLands,
};
