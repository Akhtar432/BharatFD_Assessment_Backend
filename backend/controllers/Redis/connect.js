import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisPort = Number(process.env.REDIS_PORT) || 6379;
const redisHost = process.env.REDIS_HOST || "localhost";
const redisPassword = process.env.REDIS_PASSWORD || undefined;

const redis = new Redis({
  port: redisPort,
  host: redisHost,
  password: redisPassword,
});

redis.on("connect", () => {
  console.log("Redis is connected");
});

redis.on("error", (err) => {
  console.error("Redis connection error:", err);
});

export default redis;