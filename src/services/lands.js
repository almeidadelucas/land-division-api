const { client } = require("../../redis-server");
const { Land, Region } = require("../models");
const { Op } = require("sequelize");

const findById = (id) => Land.findByPk(id);

const createNewLand = async (req_body) => {
    const data = await Land.create({
        state: req_body.state, 
        regionId: req_body.regionId,
        city: req_body.city, 
        address: req_body.address,
        hectare: req_body.hectare
        }
    );

    await client.del("lands")
    console.log("Cache cleared")
    return data
}

const findAllLands = async () => {
    const result = await client.get("lands");
    if (result) {
        console.log("Result returned by redis")
        return JSON.parse(result)
    }

    const data = await Land.findAll();
    
    if (data) {
        await client.set("lands", JSON.stringify(data), {"EX": 10});
        console.log("Content cached")
    }
    return data;

}

const findAllAvalibleLands = () =>
	Land.findAll({
		attributes: ["state", "city", "address", "hectare"],
		where: {
			familyid: {
				[Op.is]: null,
			},
		},
	});

const getRegionLandById = (id) =>
	Land.findByPk(id, {
		attributes: [],
		include: [{ model: Region, as: "fkRegionLand" }],
	});

const getPrecipitationAndTemperature = (id) =>
	Land.findByPk(id, {
		attributes: [],
		include: [
			{
				model: Region,
				as: "fkRegionLand",
				attributes: ["averageTemperature", "annualPrecipitation"],
			},
		],
	});

const updatedLand = (id, body) => Land.update(body, { where: { id } });

const deleteLand = (id) => Land.destroy({ where: { id } });

module.exports = {
	createNewLand,
	updatedLand,
	deleteLand,
	findAllAvalibleLands,
	getRegionLandById,
	findAllLands,
	findById,
	getPrecipitationAndTemperature,
};
