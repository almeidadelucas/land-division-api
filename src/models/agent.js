const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Agent = sequelize.define("Agent", {
	name: {
		type: DataTypes.STRING,
	},
	CPF: {
		type: DataTypes.STRING,
	},
	RG: {
		type: DataTypes.STRING,
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
	Agent.hasMany(sequelize.models.Land, {
		foreignKey: "agentId",
		as: "fkAgentLand",
	});
};

module.exports = { model: Agent, associate };
