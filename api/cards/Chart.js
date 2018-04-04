class Chart {
  constructor(title, tooltip, legend, series) {
    this.title = {
      text: title,
      subtext: 'From ExcelHome',
      sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
    }
    this.tooltip = {
      trigger: tooltip.axis,
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: tooltip.fun
    }
    this.legend = {
      data: [legend]
    }
    this.series = series
  }
}
export { Chart }
