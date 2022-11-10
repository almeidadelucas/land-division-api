const { Land } = require("../models");

const createNewLand = (req_body) => Land.create({
    "state": req_body.state, 
    "regionId": req_body.regionId,
    "city": req_body.city, 
    "address": req_body.address,
    "hectare": req_body.hectare
    }
);

module.exports = {
	createNewLand,
};
