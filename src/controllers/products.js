const productsService = require("../services/products");

const createNewProduct = async (req, res) => {
	try {
        console.log(req.body)
		await productsService.createNewProduct(req.body);
		res.status(200).json({"status":"Ok"});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { createNewProduct };
