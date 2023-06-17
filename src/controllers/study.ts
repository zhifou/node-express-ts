/**
 * Created by zhaoyadong on 12/11/2017.
 */
import type { Request, Response, NextFunction } from 'express'
import { type Union } from '../types'
import log from '../utils/logger'

export default {
    lesson1: function (req: Request, res: Response, next: NextFunction) {
        // res.send('hello express');
        res.setHeader('Content-type', 'text/html;charset=utf-8')
        // res.render('index', { title: 'Hello', content: 'World' })
        const person: Union = {
            name: 'zhaoya',
            age: 18,
        }
        log.info(JSON.stringify(person))
        res.status(200).send(JSON.stringify(person))
        next()
    },
}
