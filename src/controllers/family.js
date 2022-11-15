const familyService = require("../services/family");

const listFamilies = async (req, res) => {
	try {
		const families = await familyService.findAllFamilies();
		res.status(200).json(families);
	} catch (err) {
        console.log(err)
		res.status(500).json({ message: err.message });
	}
};

const createNewFamily = async (req, res) => {
  try {
    const response = await familyService.createNewFamily(req.body);
    res.status(200).json({ status: response });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { 
    listFamilies,
    createNewFamily
};
