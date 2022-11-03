module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Regions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			averageTemperature: {
				type: Sequelize.DOUBLE,
			},
			averagePrice: {
				type: Sequelize.DOUBLE,
			},
			annualPrecipitation: {
				type: Sequelize.DOUBLE,
			},
			populationSize: {
				type: Sequelize.DOUBLE,
			},
			numberSchools: {
				type: Sequelize.TINYINT,
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
		await queryInterface.dropTable("Regions");
	},
};
