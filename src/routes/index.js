const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

fs.readdirSync("src/routes")
	.reduce((acc, file) => {
		const filename = path.parse(file).name;
		if (filename !== "index") {
			acc.push({ filename, file });
		}
		return acc;
	}, [])
	.forEach(({ filename, file }) => {
		const routes = require(`./${file}`);
		router.use(`/${filename}`, routes);
	});

module.exports = router;
