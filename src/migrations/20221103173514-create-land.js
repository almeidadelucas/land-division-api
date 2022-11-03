module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Lands", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			regionId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Regions", key: "id" },
			},
			agentId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: "Agents", key: "id" },
			},
			familyId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: "Families", key: "id" },
			},
			state: {
				type: Sequelize.STRING,
			},
			city: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			hectare: {
				type: Sequelize.DOUBLE,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Lands");
	},
};
