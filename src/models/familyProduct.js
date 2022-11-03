const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const FamilyProduct = sequelize.define("FamilyProduct", {
	familyId: {
		type: DataTypes.INTEGER,
	},
	productId: {
		type: DataTypes.INTEGER,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	updatedAt: {
		allowNull: false,
		type: DataTypes.DATE,
	},
});

module.exports = { model: FamilyProduct };
