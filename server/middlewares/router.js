import Router from 'koa-router'
import { mockMQ } from '../controllers'
export const router = app => {
  const router = new Router()
  router.get('/findCodeDataByCode', mockMQ)
  app.use(router.routes())
     .use(router.allowedMethods())
}
