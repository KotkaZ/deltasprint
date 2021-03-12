<template>
  <picture id="overlay">
    <div class='tint'></div>
    <source media="(min-width: 4994px)" srcset="./assets/background/backgroundXXL.webp" type="image/webp">
    <source media="(min-width: 3400px) and (max-width: 4993px)" srcset="./assets/background/backgroundXXL.webp" type="image/webp">
    <source media="(min-width: 1920px) and (max-width: 3399px)" srcset="./assets/background/backgroundXL.webp" type="image/webp">
    <source media="(max-width: 1919px)" srcset="./assets/background/backgroundL.webp" type="image/webp">

    <source media="(min-width: 4994px)" srcset="./assets/background/backgroundXXL.jpg" type="image/jpeg">
    <source media="(min-width: 3400px) and (max-width: 4993px)" srcset="./assets/background/backgroundXXL.jpg" type="image/jpeg"> 
    <source media="(min-width: 1920px) and (max-width: 3399px)" srcset="./assets/background/backgroundXL.jpg" type="image/jpeg"> 
    <source media="(max-width: 1919px)" srcset="./assets/background/backgroundL.jpg" type="image/jpeg"> 
    <img id="background" src="./assets/background/backgroundXL.jpg" alt="Delta building">
  </picture>
  <ConfirmDialog/>
  <Toast/>

  <div id="main" class="p-d-flex p-flex-column">
    <Header></Header>
    <router-view class="p-my-md-3"/>
    <Footer class="p-mt-auto"/>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import '../res/theme.css'        //theme
import 'primevue/resources/primevue.min.css'                  //core css
import 'primeicons/primeicons.css'                            //icons
import 'primeflex/primeflex.css'

import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';

export default {
  components: {
    Header,
    Footer,
    ConfirmDialog,
    Toast
  },
  methods: {
    ...mapActions(['setupHeaders'])
  },
  created(){
    this.setupHeaders();

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,600,700&display=swap');

* {
  outline: none;
  margin: 0;
}


#background{ 
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#overlay {
  z-index: -999;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
#overlay:before {
 content: '';
 position: absolute;
 width: 100%;
 height: 100%;
 background: -webkit-linear-gradient(45deg, rgba(183,154,49,0.6) 25%, rgba(255,255,255,0.5) 75%);
 background: linear-gradient(45deg, rgba(183,154,49,0.6) 25%, rgba(255,255,255,0.5) 75%);
}


#main{
  min-height: 100vh;
}


</style>
