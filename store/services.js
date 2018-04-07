import axios from 'axios'
import R from 'ramda'
// __dirname 当前路径
// const baseUrl = ''
class Services {
  getPeoplePath(obj) { // 人口流向
    const {url, data} = obj
    var options = {
      method: 'GET',
      url: url,
      params: data,
      json: true // Automatically stringifies the body to JSON
    }
    return axios(options)
  }
  async fillHolyGrail(obj) { // 填充圣杯视图
    let left = obj['left']
    let right = obj['right']
    let layout = [...left, ...right]
    let compontents = []
    let position = []
    await this.useCompontents(compontents)(layout)
    await this.usePosition(position)(layout)
    return {
      compontents,
      position
    }
  }

  useCompontents(components) {
    return R.map(R.pipe(
      i => require(`../components/views/cards/${i.components}`),
      R.map(i => components.push(i))
    ))
  }
  usePosition(position) {
    return R.map(
      i => {
        position.push(i.position)
      }
    )
  }
}
export default new Services()
