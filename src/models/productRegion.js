const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const ProductRegion = sequelize.define("ProductRegion", {
	productId: {
		type: DataTypes.INTEGER,
	},
	regionId: {
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

module.exports = { model: ProductRegion };
