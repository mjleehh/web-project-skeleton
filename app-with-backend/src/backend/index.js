import Koa from 'koa'
import Router from 'koa-router'


const backend = new Koa()
const router = new Router()

backend.use(router.routes())
backend.listen(3000)
