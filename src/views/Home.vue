<template>
  <div class="p-d-flex p-jc-center">
    <div class="container">
      <HomeWelcome/>
    </div>
    

  </div>
</template>

<script>
import HomeWelcome from '../components/HomeWelcome.vue'

export default {
  name: 'Home',
  components: {
    HomeWelcome
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 62px);
  width: 100%;
}
</style>
