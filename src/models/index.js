const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const models = {};
const associations = [];

if (Object.keys(models).length === 0) {
	fs.readdirSync(__dirname)
		.filter(
			(file) =>
				file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		)
		.forEach((file) => {
			const { model, associate } = require(path.join(__dirname, file));
			if (associate) {
				associations.push(associate);
			}
			models[model.name] = model;
		});

	associations.forEach((associate) => associate());
}

module.exports = models;
