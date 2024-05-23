import express from 'express'
// import session from 'express-session'
// import RedisStore from 'connect-redis'
// import Redis from 'ioredis'
import config from 'config'
import routes from './routes'
import initMiddleware from './middleware'
import logger from './utils/logger'

const PORT = config.get<number>('port')
const app = express()
// const redis = new Redis()

initMiddleware(app)

// 可以使用Redis来存储用户会话信息，特别是在分布式环境下，这样可以确保用户在任意一台服务器上的登录状态和会话信息都是一致的。
// app.use(
//     session({
//         store: new RedisStore({ client: redis }),
//         secret: 'your-secret-key',
//         resave: false,
//         saveUninitialized: true,
//     })
// )

app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`)
    routes(app)
})
