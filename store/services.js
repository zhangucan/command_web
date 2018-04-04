import axios from 'axios'
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
}
export default new Services()
