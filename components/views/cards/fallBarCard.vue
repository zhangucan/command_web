<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="header"></div>
    <div class="content">
      <chart :options="fallBarCard"
          :width = 'chartWidth'
          ref="fallBarCard"
          theme="ovilia-green"
          auto-resize />
    </div>
  </el-card>
</template>
<script>
import { mapState } from 'vuex'
export default{
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      fallBarCard: 'fallBarCard'
    }),
    chartWidth() {
      return 300
    }
  },
  beforeCreate() {
    this.$store.dispatch('getFallBarData')
  }
}
</script>
<style lang="scss" src='../../../assets/scss/chartCart.scss' scoped></style>
