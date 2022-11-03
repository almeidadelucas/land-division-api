module.exports = {
	async up(queryInterface, Sequelize) {
		const today = new Date();
		queryInterface
			.bulkInsert("ProductRegions", [
				{ regionId: 1, productId: 4, createdAt: today, updatedAt: today },
				{ regionId: 1, productId: 1, createdAt: today, updatedAt: today },
				{ regionId: 2, productId: 2, createdAt: today, updatedAt: today },
				{ regionId: 2, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 3, productId: 5, createdAt: today, updatedAt: today },
				{ regionId: 3, productId: 4, createdAt: today, updatedAt: today },
				{ regionId: 4, productId: 1, createdAt: today, updatedAt: today },
				{ regionId: 4, productId: 4, createdAt: today, updatedAt: today },
				{ regionId: 5, productId: 2, createdAt: today, updatedAt: today },
				{ regionId: 5, productId: 5, createdAt: today, updatedAt: today },
				{ regionId: 6, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 6, productId: 5, createdAt: today, updatedAt: today },
				{ regionId: 7, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 7, productId: 5, createdAt: today, updatedAt: today },
				{ regionId: 8, productId: 1, createdAt: today, updatedAt: today },
				{ regionId: 8, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 9, productId: 2, createdAt: today, updatedAt: today },
				{ regionId: 9, productId: 1, createdAt: today, updatedAt: today },
				{ regionId: 10, productId: 2, createdAt: today, updatedAt: today },
				{ regionId: 10, productId: 4, createdAt: today, updatedAt: today },
				{ regionId: 11, productId: 2, createdAt: today, updatedAt: today },
				{ regionId: 11, productId: 5, createdAt: today, updatedAt: today },
				{ regionId: 12, productId: 2, createdAt: today, updatedAt: today },
				{ regionId: 12, productId: 4, createdAt: today, updatedAt: today },
				{ regionId: 13, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 13, productId: 1, createdAt: today, updatedAt: today },
				{ regionId: 14, productId: 2, createdAt: today, updatedAt: today },
				{ regionId: 14, productId: 4, createdAt: today, updatedAt: today },
				{ regionId: 15, productId: 5, createdAt: today, updatedAt: today },
				{ regionId: 15, productId: 4, createdAt: today, updatedAt: today },
				{ regionId: 16, productId: 1, createdAt: today, updatedAt: today },
				{ regionId: 16, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 17, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 17, productId: 2, createdAt: today, updatedAt: today },
				{ regionId: 18, productId: 4, createdAt: today, updatedAt: today },
				{ regionId: 18, productId: 1, createdAt: today, updatedAt: today },
				{ regionId: 19, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 19, productId: 1, createdAt: today, updatedAt: today },
				{ regionId: 20, productId: 3, createdAt: today, updatedAt: today },
				{ regionId: 20, productId: 1, createdAt: today, updatedAt: today },
			])
			.catch((err) => console.log(err.message));
	},

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete("ProductRegions", null, {});
	},
};
