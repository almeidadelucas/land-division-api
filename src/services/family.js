const { client } = require("../../redis-server");
const { Family, Member } = require("../models");

const findAllFamilies = async () => {
    const result = await client.get("families");
    if (result) {
        console.log("Result returned by redis")
        return JSON.parse(result)
    }
    
	const data = await Family.findAll();
    if (data) {
        await client.set("families", JSON.stringify(data), {"EX": 10});
        console.log("Content cached")
    }
    return data;
};

const createNewFamily = async (req_body) => {
    const data = await Family.create({
        name: req_body.name,
        chosenState: req_body.chosenState,
        monthlyIncome: req_body.monthlyIncome,
    });

    await client.del("families")
    console.log("Cache cleared")
    return data
}

module.exports = {
	findAllFamilies,
  createNewFamily
}
