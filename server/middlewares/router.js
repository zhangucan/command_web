import Router from 'koa-router'
import request from 'request-promise'
export const router = app => {
  const router = new Router()
  router.get('/findCodeDataByCode', async (ctx, next) => {
    const { dataType, code, dataName } = ctx.query
    const options = {
      uri: 'http://127.0.0.1:8080/command_web/services/mqShowData/findCodeDataByCode',
      json: true,
      qs: {
        dataType: dataType,
        code: code,
        dataName: dataName
      }
    }
    await request(options).then(data => {
      ctx.body = data.mqShowDataList
    })
  })
  app.use(router.routes())
     .use(router.allowedMethods())
}
