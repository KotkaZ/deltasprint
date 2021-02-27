<template>
  <div class="p-d-flex p-jc-center">
    <div class="container">
      <HomeWelcome/>
      <Footer id="footer"/>
    </div>
    

  </div>
</template>

<script>
import HomeWelcome from '../components/HomeWelcome.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HomeWelcome,
    Footer
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 62px);
  width: 100%;
}
#footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
