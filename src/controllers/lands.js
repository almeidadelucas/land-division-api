const landsService = require("../services/lands");

const createNewLand = async (req, res) => {
	try {
        console.log(req.body)
		await landsService.createNewLand(req.body);
		res.status(200).json({"status":"Ok"});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { createNewLand };
