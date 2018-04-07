import config from '../../config'
import request from 'request-promise'
import Mock from 'mockjs'

const baseUri = config.SITE_ROOT_URL
// Mock.mock( template )
const Random = Mock.Random
export async function mockMQ(ctx, next) {
  const template = {
    'mqShowDataList|20': [
      {
        name: () => Random.county(),
        dataDate: () => Random.date('yyyy-MM'),
        dataVal: () => Random.integer(60, 300),
        'dataType|1': ['流入', '流出']
      }
    ]
  }
  const data = await Mock.mock(template)
  ctx.body = data.mqShowDataList
}
export async function mqshowdata(ctx, next) {
  const { dataType, code, dataName } = ctx.query
  const options = {
    method: 'POST',
    uri: baseUri + '/services/mqShowData/findCodeDataByCode',
    json: true,
    body: {
      dataType: dataType,
      code: code,
      dataName: dataName
    }
  }
  await request(options).then(data => {
    ctx.body = data.mqShowDataList
  })
}
