const { client } = require("../../redis-server");
const { Family, Member } = require("../models");

const findAllFamilies = async () => {
    const result = await client.get("families");
    if (result) {
        console.log("Result returned by redis")
        return JSON.parse(result)
    }

	let data = await Family.findAll({
		attributes: ["id", "name"],
		include: [
			{ model: Member, as: "fkMemberFamily", attributes: ["id", "name"] },
		],
	});
    
    if (data) {
        await client.set("families", JSON.stringify(data));
        console.log("Content cached")
    }
    return data;
};


module.exports = {
	findAllFamilies,
}
