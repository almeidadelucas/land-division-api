module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Productions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			familyId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Families", key: "id" },
			},
			landId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Lands", key: "id" },
			},
			productId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Products", key: "id" },
			},
			amount: {
				type: Sequelize.DOUBLE,
			},
			date: {
				type: Sequelize.DATE,
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
		await queryInterface.dropTable("Productions");
	},
};
