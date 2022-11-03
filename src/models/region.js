const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Region = sequelize.define("Region", {
	name: {
		type: DataTypes.STRING,
	},
	averageTemperature: {
		type: DataTypes.DOUBLE,
	},
	averagePrice: {
		type: DataTypes.DOUBLE,
	},
	annualPrecipitation: {
		type: DataTypes.DOUBLE,
	},
	populationSize: {
		type: DataTypes.DOUBLE,
	},
	numberSchools: {
		type: DataTypes.TINYINT,
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
	Region.belongsToMany(sequelize.models.Product, {
		through: "ProductRegion",
		as: "regions",
		foreignKey: "productId",
	});

	Region.hasMany(sequelize.models.Land, {
		foreignKey: "regionId",
		as: "fkRegionLand",
	});
};

module.exports = { model: Region, associate };
