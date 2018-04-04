export async function fallBarData(data) {
  let option = {}
  let targetDate = ''
  let tempArr = []
  var myDate = new Date()
  var year = myDate.getFullYear()
  var mouth = myDate.getMonth() + 1
  console.log(data)
  for (let i = 0; i < data.period; i++) {
    option.legend.data.push(mouth + '月')
    if (mouth < 10) {
      targetDate = year + '-0' + mouth
    } else {
      targetDate = year + '-' + mouth
    }
    var resultInfo = data.filter(function (item) {
      return targetDate === item.dataDate
    }).forEach(function (item) {
      tempArr.push(item)
    })
    if (--mouth === 0) { mouth = 12; year-- }
  }
  data.map(function (item) {

  })
  return {
    title: {
      text: '阶梯瀑布图',
      subtext: 'From ExcelHome',
      sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var tar
        if (params[1].value !== '-') {
          tar = params[1]
        } else {
          tar = params[0]
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
      }
    },
    legend: {
      data: ['支出', '收入']
    }
  }
}
