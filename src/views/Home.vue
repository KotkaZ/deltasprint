<template>
  <div>
    <div class="container p-grid p-ai-center p-jc-center vertical-container">
      <HomeWelcome class="p-col"/>
    </div>
    <div class="container p-grid p-ai-center p-jc-center vertical-container">
      <HomePlatform class="p-col"/>
    </div>
    <div class="container p-grid p-ai-center p-jc-center vertical-container">
      <HomeSponsors class="p-col"/>
    </div>
    <Footer id="footer"/>
  </div>
</template>

<script>
import HomeWelcome from '../components/HomeWelcome.vue';
import HomePlatform from '../components/HomePlatform.vue';
import HomeSponsors from '../components/HomeSponsors.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HomeWelcome,
    HomePlatform,
    HomeSponsors,
    Footer
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 62px);
  width: 100%;
  vertical-align: middle;
}
#footer {
  bottom: 0px;
  width: 100%;
}

</style>
