const { Land, Region } = require("../models");
const { Op } = require("sequelize");

const createNewLand = (req_body) => Land.create({
    "state": req_body.state, 
    "regionId": req_body.regionId,
    "city": req_body.city, 
    "address": req_body.address,
    "hectare": req_body.hectare
    }
);

const findAllLands = () =>
	Land.findAll({
		attributes: ["state", "city", "address", "hectare"],
	}
);

const findAllAvalibleLands = () =>
	Land.findAll({
		attributes: ["state", "city", "address", "hectare"],
		where: {
            familyid: {
                [Op.is]: null
            }
        }
	}
);

const getRegionLandById = (id) =>
	Land.findByPk(id, {
		attributes: [],
		include: [{ model: Region, as: "fkRegionLand" }],
	});

const getPrecipitationAndTemperature = (id) =>
    Land.findByPk(id, {
        attributes: [],
        include: [{ model: Region, as: "fkRegionLand", attributes: ["averageTemperature", "annualPrecipitation"] }],
    })

module.exports = {
	createNewLand,
    findAllAvalibleLands,
    getRegionLandById,
    findAllLands,
    getPrecipitationAndTemperature,
};
