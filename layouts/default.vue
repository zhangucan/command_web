<template>
  <div class="container">
    <div class="header"></div>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 10%;
  background-image: url(../assets/img/header.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: inherit;
  z-index: 1;
}
.content{
  width: 100%;
  height: 100%;
  position: inherit;
}
.container{
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-image: url(../assets/img/background.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
