module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Families", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			chosenState: {
				type: Sequelize.STRING,
			},
			monthlyIncome: {
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
		await queryInterface.dropTable("Families");
	},
};
