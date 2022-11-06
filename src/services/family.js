const { Family, Member } = require("../models");

const findAllFamilies = () =>
	Family.findAll({
		attributes: ["id", "name"],
		include: [
			{ model: Member, as: "fkMemberFamily", attributes: ["id", "name"] },
		],
	});

module.exports = {
	findAllFamilies,
};
