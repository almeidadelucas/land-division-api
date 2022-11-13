const landsService = require("../services/lands");

const createNewLand = async (req, res) => {
	try {
		console.log(req.body);
		await landsService.createNewLand(req.body);
		res.status(200).json({ status: "Ok" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const deleteLand = async (req, res) => {
	try {
		const id = req.params.id;
		await landsService.deleteLand(id);
		res.status(200).json({ status: "Ok" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const listEmptyLands = async (req, res) => {
	try {
		const lands = await landsService.findAllAvalibleLands();
		res.status(200).json(lands);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const listLands = async (req, res) => {
	try {
		const lands = await landsService.findAllLands();
		res.status(200).json(lands);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const getLandById = async (req, res) => {
	try {
		const id = req.params.id;
		const land = await landsService.findById(id);
		res.status(200).json(land);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const regionLand = async (req, res) => {
	try {
		const id = req.params.id;
		const region = await landsService.getRegionLandById(id);
		res.status(200).json(region);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const precipitationAndTemperature = async (req, res) => {
	try {
		const id = req.params.id;
		const region = await landsService.getPrecipitationAndTemperature(id);
		res.status(200).json(region);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const updateLand = async (req, res) => {
	try {
		const id = req.params.id;
		const { state, city, address, hectare, agentId, familyId, regionId } =
			req.body;

		await landsService.updatedLand(id, {
			state,
			city,
			address,
			hectare,
			agentId,
			familyId,
			regionId,
		});

		const updatedLand = await landsService.findById(id);
		res.status(200).json(updatedLand);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
	createNewLand,
	updateLand,
	listEmptyLands,
	getLandById,
	regionLand,
	listLands,
	precipitationAndTemperature,
	deleteLand,
};
