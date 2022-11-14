const redis = require("redis");
const {get} = require("./src/routes");
const client = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.connect();

client.on("error", (error) => {
        console.error(error);
});

console.log("Connected to redis server")

module.exports = {
    client
}
