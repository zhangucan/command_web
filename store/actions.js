import Services from './services'
import { Layout } from '../api/layout/Layout'
import { fallBarData } from '../api/cards/fallBar'
import config from '../config'
export default {
  async getFallBarData({ state }) {
    const res = await Services.getPeoplePath(config.fallBarConfig.request)
    const obj = {
      data: res.data,
      title: config.fallBarConfig.title,
      period: config.fallBarConfig.period
    }
    const options = await fallBarData(obj)
    state.fallBarCard = options
  },
  async fillComponents({state}) {
    let layout = new Layout()
    let type = config.layout.currentLayout
    let layoutList = layout.getLayout(type)
    switch (type) {
      case 'HolyGrail':
        let {
          compontents,
          position } = await Services.fillHolyGrail(layoutList)
        state.layout.name = type
        state.layout.items = {
          components: compontents,
          position: position
        }
        console.log(state)
        break
      default:
        break
    }
  }
}
