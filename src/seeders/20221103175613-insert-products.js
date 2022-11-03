module.exports = {
	async up(queryInterface, Sequelize) {
		const today = new Date();
		queryInterface
			.bulkInsert("Products", [
				{
					id: 1,
					name: "Arroz",
					averagePrice: 1.6,
					minPlantingTemperature: 20,
					maxPlantingTemperature: 35,
					createdAt: today,
					updatedAt: today,
				},
				{
					id: 2,
					name: "Feijão preto",
					averagePrice: 3.15,
					minPlantingTemperature: 18,
					maxPlantingTemperature: 24,
					createdAt: today,
					updatedAt: today,
				},
				{
					id: 3,
					name: "Mandioca",
					averagePrice: 1.0,
					minPlantingTemperature: 20,
					maxPlantingTemperature: 27,
					createdAt: today,
					updatedAt: today,
				},
				{
					id: 4,
					name: "Pimentão",
					averagePrice: 3.5,
					minPlantingTemperature: 20,
					maxPlantingTemperature: 25,
					createdAt: today,
					updatedAt: today,
				},
				{
					id: 5,
					name: "Tomate",
					averagePrice: 3.0,
					minPlantingTemperature: 10,
					maxPlantingTemperature: 34,
					createdAt: today,
					updatedAt: today,
				},
			])
			.catch((err) => console.log(err.message));
	},

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete("Products", null, {});
	},
};
