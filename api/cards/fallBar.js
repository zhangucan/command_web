export function fallBarData(data) {
  let result = data.data.sort((a, b) => {
    return Date.parse(a.dataDate) - Date.parse(b.dataDate)
  }).slice(0, 6)
  let dataIn = new Array(6).fill('-')
  let dataOut = new Array(6).fill('-')
  let dataAll = []
  let category = []
  result.reduce((total, currentValue, index) => {
    category.push(currentValue.dataDate)
    if (currentValue.dataType === '流入') {
      dataAll.push(total)
      dataIn[index] = currentValue.dataVal
      total += currentValue.dataVal
      return total
    } else if (currentValue.dataType === '流出') {
      total -= currentValue.dataVal
      dataOut[index] = currentValue.dataVal
      dataAll.push(total)
      return total
    }
  }, 0)
  let minVal = Math.min(...dataAll)
  dataAll.forEach((item, index) => {
    dataAll[index] = item + Math.abs(minVal)
  })
  return {
    title: {
      show: false
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
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      containLabel: true
    },
    legend: {
      show: false
    },
    xAxis: {
      type: 'category',
      spliteLine: {
        show: true,
        lineStyle: {
          color: ['#000']
        }
      },
      data: category
    },
    yAxis: {
      type: 'value',
      splitLine: {show: false}
    },
    series: [
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: dataAll
      },
      {
        name: '流入',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        data: dataIn
      },
      {
        name: '流出',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'bottom'
          }
        },
        data: dataOut
      }
    ]
  }
}
