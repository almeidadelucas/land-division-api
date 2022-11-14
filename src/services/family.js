const { client } = require("../../redis-server");
const { Family, Member } = require("../models");

const findAllFamilies = async () => {
    const result = await client.get("families");
    if (result) {
        console.log("Result returned by redis")
        return JSON.parse(result)
    }

	const data = await Family.findAll({
		attributes: ["id", "name"],
		include: [{ model: Member, as: "fkMemberFamily" }],
	});
    
    if (data) {
        await client.set("families", JSON.stringify(data), {"EX": 10});
        console.log("Content cached")
    }
    return data;
};


module.exports = {
	findAllFamilies,
}
