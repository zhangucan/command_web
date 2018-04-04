<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="header"></div>
    <div class="content">
      <chart :option="fallBarCard"></chart>
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
    })
  },
  beforeCreate() {
    this.$store.dispatch('getFallBarData')
  }
}
</script>
<style lang="scss" src='../../../assets/scss/chartCart.scss' scoped></style>
