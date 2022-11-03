const familyService = require("../services/family");

const listFamilies = async (req, res) => {
	try {
		const families = await familyService.findAllFamilies();
		res.status(200).json(families);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { listFamilies };
