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

// const getRedisAsync = async (key) => {
//    const value = await redisClient.get(key);
//    return value;
// };

// const setRedisAsync = async (key, value) => {
//    await redisClient.set(key, value);
// };

console.log("Connected to redis server")

module.exports = {
    client
}
