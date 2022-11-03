const express = require("express");
const router = require("./src/routes");

require("./src/models");

const app = express();

app.use(express.json());

app.use(router);

const server = app.listen(3000, async () => {
	console.debug("server running on port 3000");
});

module.exports = {
	app,
	server,
};
