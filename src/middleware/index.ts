// index.ts
import express from 'express'
import cors from 'cors'
import responseHeader from './responseHeader'

function initMiddleware(app: express.Application) {
    app.use(express.json())
    // 使用 CORS 中间件，允许所有源访问（也可以根据需求设置特定的源）
    app.use(cors())
    app.use(responseHeader)
}

export default initMiddleware
