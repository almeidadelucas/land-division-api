const newFamilyService = require("../services/familyRegistration");

const createNewFamily = async (req, res) => {
  try {
    const response = await newFamilyService.createNewFamily(req.body);
    res.status(200).json({ status: response });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createNewFamily };
