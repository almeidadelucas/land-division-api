const newFamilyService = require("../services/familyRegistration");

const createNewFamily = async (req, res) => {
  try {
    await newFamilyService.createNewFamily(req.body);
    res.status(200).json({ status: "Ok" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createNewFamily };
