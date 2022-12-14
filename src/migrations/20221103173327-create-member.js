module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Members", {
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
			name: {
				type: Sequelize.STRING,
			},
			CPF: {
				type: Sequelize.STRING,
			},
			RG: {
				type: Sequelize.STRING,
			},
			birthDate: {
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
		await queryInterface.dropTable("Members");
	},
};
