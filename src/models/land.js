const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Land = sequelize.define("Land", {
	state: {
		type: DataTypes.INTEGER,
	},
	city: {
		type: DataTypes.INTEGER,
	},
	address: {
		type: DataTypes.INTEGER,
	},
	hectare: {
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
	Land.belongsTo(sequelize.models.Region, {
		foreignKey: "regionId",
		as: "fkRegionLand",
	});

	Land.belongsTo(sequelize.models.Agent, {
		foreignKey: "agentId",
		as: "fkAgentLand",
	});

	Land.belongsTo(sequelize.models.Family, {
		foreignKey: "familyId",
		as: "fkFamilyLand",
	});

	Land.hasMany(sequelize.models.Production, {
		foreignKey: "productId",
		as: "fkProductionLand",
	});
};

module.exports = { model: Land, associate };
