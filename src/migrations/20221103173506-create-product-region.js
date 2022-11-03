module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("ProductRegions", {
			productId: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: { model: "Products", key: "id" },
			},
			regionId: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: { model: "Regions", key: "id" },
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
		await queryInterface.dropTable("ProductRegions");
	},
};
