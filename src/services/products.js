const { Product } = require("../models");

const createNewProduct = (req_body) => Product.create({
    "name": req_body.name,
    "minPlantingTemperature": req_body.minTemp,
    "maxPlantingTemperature": req_body.maxTemp,
    "averagePrice": req_body.avgPrice
    }
);

module.exports = {
	createNewProduct,
};
