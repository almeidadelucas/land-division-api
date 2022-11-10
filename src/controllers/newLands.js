const newLandsService = require("../services/newLands");

const createNewLand = async (req, res) => {
	try {
        console.log(req.body)
		await newLandsService.createNewLand(req.body);
		res.status(200).json({"status":"Ok"});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { createNewLand };
