/**
 * Created by zhaoyadong on 05/27/2024.
 */
import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import log from '../utils/logger'

export default {
    login: async function (req: Request, res: Response, next: NextFunction) {
        const { userId, userName, password } = req.body
        const token = jwt.sign(
            { userId: userId, username: userName }, // 填入想存储的用户信息
            (process.env as any).JWT_SECRET, // 秘钥，可以为随机一个字符串
            {
                expiresIn: '7d', // 其他选项，如过期时间
            }
        )
        res.status(200).send('ok')
        next()
    },
    logout: async function (req: Request, res: Response, next: NextFunction) {
        res.status(200).send('ok')
        next()
    },
}
