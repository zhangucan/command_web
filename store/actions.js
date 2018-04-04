import Services from './services'
import { fallBarData } from '../api/cards/fallBar'
import chartConfig from '../config/chartConfig'
export default {
  async getFallBarData({ state }) {
    const res = await Services.getPeoplePath(chartConfig.fallBarConfig.request)
    const obj = {
      data: res.data,
      title: chartConfig.fallBarConfig.title,
      period: chartConfig.fallBarConfig.period
    }
    const options = fallBarData(obj)
    state.fallBarCard = options
  }
}
