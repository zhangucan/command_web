<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="header"></div>
    <div class="content">
      <chart :options="bar"
          ref="bar"
          theme="ovilia-green"
          auto-resize />
    </div>
  </el-card>
</template>
<script>

export default {
  data() {
    return {
      bar: {
        legend: {
          show: false
        },
        tooltip: {},
        dataset: {
          // Provide data.
          source: [
            ['Product', '2015', '2016', '2017'],
            ['Matcha Latte', ...this.randomize()],
            ['Milk Tea', ...this.randomize()],
            ['Cheese Cocoa', ...this.randomize()],
            ['Walnut Brownie', ...this.randomize()]
          ]
        },
        // Declare X axis, which is a category axis, mapping
        // to the first column by default.
        xAxis: { type: 'category' },
        // Declare Y axis, which is a value axis.
        yAxis: {},
        // Declare several series, each of them mapped to a
        // column of the dataset by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }
    }
  },
  methods: {
    randomize() {
      return Array(3).fill(null).map(v => {
        return Math.round(300 + Math.random() * 700) / 10
      })
    }
  }
}
</script>
<style lang="scss" src='../../../assets/scss/chartCart.scss' scoped></style>
