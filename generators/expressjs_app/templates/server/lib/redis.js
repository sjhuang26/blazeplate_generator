const redis = require('redis')

// Redis Configuration
const redis_host = process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost'
const redis_port = process.env.REDIS_PORT_6379_TCP_PORT || '6379'

// Instantiates new RedisClient instance
const redisClient = redis.createClient({ host: redis_host, port: redis_port })

module.exports = redisClient
