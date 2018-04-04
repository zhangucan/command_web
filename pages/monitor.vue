<template>
    <el-row :gutter=20>
      <el-col :span="5">
        <el-row>
          <el-col>
            <bar-card></bar-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="14">
        <el-row><map-card></map-card></el-row>
      </el-col>
      <el-col :span="5">
        <el-row>
          <el-col>
            <fall-card></fall-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
</template>
<script>
import mapCard from '../components/views/cards/mapCard'
import barCard from '../components/views/cards/barCard'
import fallCard from '../components/views/cards/fallBarCard'

export default {
  components: {
    mapCard,
    barCard,
    fallCard
  },
  data() {
    return {
    }
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
