import config from '../../config/index'
export class Layout {
  getLayout(type) {
    const layoutConfig = config.layout[type]
    let layoutList = {}
    switch (type) {
      case 'HolyGrail':
        let left = layoutConfig['left']
        let right = layoutConfig['right']
        layoutList = {
          left: this.layoutItem(left, 'left'),
          right: this.layoutItem(right, 'right')
        }
        break
      default:
        break
    }
    return layoutList
  }

  height(arr) {
    const temp = arr.reduce(function (total, item, index) {
      const key = Object.keys(item)[0]
      total += item[key]
      return total
    }, 0)
    let height = temp / arr.length
    return height
  }
  layoutItem(arr, flag) {
    const high = this.height(arr)
    let tempArr = []
    arr.reduce(function (total, item, index) {
      const key = Object.keys(item)[0]
      let temp = {
        components: key,
        position: (flag) => {
          if (flag === 'left') {
            return {
              left: '2vw',
              width: '20vw',
              height: high + 'vh',
              top: total + 'vh',
              'z-index': 9
            }
          } else if (flag === 'right') {
            return {
              right: '2vw',
              width: '20vw',
              height: high + 'vh',
              top: total + 'vh',
              'z-index': 9
            }
          }
        }
      }
      tempArr.push(temp)
      total += high * item[key]
      return total
    }, 0)
    return tempArr
  }
}
