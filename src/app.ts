import express from 'express'
import routes from './routes'
import initMiddleware from './middleware'
import logger from './utils/logger'
import config from 'config'

const PORT = config.get<number>('port')
const app = express()

initMiddleware(app)

app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`)
    routes(app)
})
