const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Product = sequelize.define("Product", {
	name: {
		type: DataTypes.STRING,
	},
	minPlantingTemperature: {
		type: DataTypes.DOUBLE,
	},
	maxPlantingTemperature: {
		type: DataTypes.DOUBLE,
	},
	averagePrice: {
		type: DataTypes.DOUBLE,
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

const associate = () => {
	Product.hasMany(sequelize.models.Production, {
		foreignKey: "productId",
		as: "fkProductionProduct",
	});

	Product.belongsToMany(sequelize.models.Family, {
		through: "FamilyProduct",
		as: "families",
		foreignKey: "familyId",
	});

	Product.belongsToMany(sequelize.models.Region, {
		through: "ProductRegion",
		as: "regions",
		foreignKey: "regionId",
	});
};

module.exports = { model: Product, associate };
