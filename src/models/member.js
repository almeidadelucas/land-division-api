const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Member = sequelize.define("Member", {
	name: {
		type: DataTypes.STRING,
	},
	CPF: {
		type: DataTypes.STRING,
	},
	RG: {
		type: DataTypes.STRING,
	},
	birthDate: {
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
	Member.belongsTo(sequelize.models.Family, {
		foreignKey: "familyId",
		as: "fkFamilyMember",
	});
};

module.exports = { model: Member, associate };
