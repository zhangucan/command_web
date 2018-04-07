<template>
  <div>
    <map-card></map-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      layout: 'layout'
    })
  },
  watch: {
    layout(val) {
      console.log(val)
    }
  },
  methods: {
    item() {
      console.log(this.$store.state.layout)
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  beforeCreate() {
    this.$store.dispatch('fillComponents')
  }
}
</script>
<style lang="scss" scoped>
  .el-header {
    background: #6d6c6c
  }
  .test{
    height: 1080px;
    background: #6d6c6c
  }
  .el-main{
    padding: 0
  }
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
