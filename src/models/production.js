const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Production = sequelize.define("Production", {
	amount: {
		type: DataTypes.DOUBLE,
	},
	date: {
		type: DataTypes.DATE,
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
	Production.belongsTo(sequelize.models.Family, {
		foreignKey: "familyId",
		as: "fkFamilyProduction",
	});

	Production.belongsTo(sequelize.models.Land, {
		foreignKey: "landId",
		as: "fkLandProduction",
	});

	Production.belongsTo(sequelize.models.Product, {
		foreignKey: "productId",
		as: "fkProductProduction",
	});
};

module.exports = { model: Production, associate };
