const { Family, Member } = require("../models");

const findAllFamilies = () =>
	Family.findAll({
		include: [{ model: Member, as: "fkMemberFamily" }],
	});

module.exports = {
	findAllFamilies,
};
