import express, {
    Express,
    NextFunction,
    Request,
    Response,
    Router,
} from 'express'
import silentHandle from '../utils/silentHandle'
import studyController from '../controllers/study'

// 路由配置接口
interface RouterConf {
    path: string
    router: Router
    meta?: unknown
}

// 路由配置
const routerConf: Array<RouterConf> = []

const getInfo = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve('info...' + Math.random())
                : reject('error...' + Math.random())
        }, 500)
    })
}

function routes(app: express.Application) {
    // 根目录
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send('Hello Express TS')
    })
    app.get('/getInfo', async (req: Request, res: Response) => {
        const [e, result] = await silentHandle(getInfo)
        e ? res.status(500).send('getInfo Error') : res.status(200).send(result)
    })
    app.get(
        '/study',
        async (req: Request, res: Response, next: NextFunction) => {
            console.log(35, req.headers, next)
            return studyController.lesson1(req, res, next)
        }
    )

    routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
