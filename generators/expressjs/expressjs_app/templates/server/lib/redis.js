const redis = require('redis')

// Redis Configuration
const redis_host = process.env.REDIS_PORT_6379_TCP_ADDR
const redis_port = process.env.REDIS_PORT_6379_TCP_PORT

// Instantiates new RedisClient instance
const redisClient = redis.createClient({ host: redis_host, port: redis_port })

module.exports = redisClient
