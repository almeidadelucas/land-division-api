const emptyLandService = require("../services/emptyLands");

const listEmptyLands = async (req, res) => {
	try {
		const lands = await emptyLandService.findAllAvalibleLands();
		res.status(200).json(lands);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { listEmptyLands };