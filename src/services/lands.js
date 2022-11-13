const { client } = require("../../redis-server");
const { Land, Region } = require("../models");
const { Op } = require("sequelize");

const createNewLand = async (req_body) => {
    let data = await Land.create({
        "state": req_body.state, 
        "regionId": req_body.regionId,
        "city": req_body.city, 
        "address": req_body.address,
        "hectare": req_body.hectare
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

    let data = await Land.findAll({
            attributes: ["state", "city", "address", "hectare"],
        }
    );
    
    if (data) {
        await client.set("lands", JSON.stringify(data));
        console.log("Content cached")
    }
    return data;

}

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
