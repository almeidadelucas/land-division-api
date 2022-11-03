module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("FamilyProducts", {
			familyId: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: { model: "Families", key: "id" },
			},
			productId: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: { model: "Products", key: "id" },
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
		await queryInterface.dropTable("FamilyProducts");
	},
};
