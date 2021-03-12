<template>
  <div>
    <div class="container p-grid p-ai-center p-jc-center vertical-container p-nogutter">
      <HomeWelcome class="p-col"/>
    </div>
    <div class="container p-grid p-ai-center p-jc-center vertical-container p-nogutter">
      <HomePlatform class="p-col"/>
    </div>
    <div class="container p-grid p-ai-center p-jc-center vertical-container p-nogutter">
      <HomeSponsors class="p-col"/>
    </div>
  </div>
</template>

<script>
import HomeWelcome from '../components/HomeWelcome.vue';
import HomePlatform from '../components/HomePlatform.vue';
import HomeSponsors from '../components/HomeSponsors.vue';

export default {
  name: 'Home',
  components: {
    HomeWelcome,
    HomePlatform,
    HomeSponsors
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 62px);
  width: 100%;
  vertical-align: middle;
}

</style>
