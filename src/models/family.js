const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Family = sequelize.define("Family", {
	name: {
		type: DataTypes.STRING,
	},
	chosenState: {
		type: DataTypes.STRING,
	},
	monthlyIncome: {
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
	Family.hasMany(sequelize.models.Member, {
		foreignKey: "familyId",
		as: "fkMemberFamily",
	});

	Family.hasMany(sequelize.models.Production, {
		foreignKey: "familyId",
		as: "fkProductionFamily",
	});

	Family.hasOne(sequelize.models.Land, {
		foreignKey: "familyId",
		as: "fkLandFamily",
	});

	Family.belongsToMany(sequelize.models.Product, {
		through: "FamilyProduct",
		as: "families",
		foreignKey: "productId",
	});
};

module.exports = { model: Family, associate };
