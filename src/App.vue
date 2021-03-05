<template>
  <picture id="overlay">
    <source media="(min-width: 4994px)" srcset="./assets/background/backgroundXXL.webp" type="image/webp">
    <source media="(min-width: 3400px) and (max-width: 4993px)" srcset="./assets/background/backgroundXL.webp" type="image/webp">
    <source media="(min-width: 1920px) and (max-width: 3399px)" srcset="./assets/background/backgroundL.webp" type="image/webp">
    <source media="(max-width: 1919px)" srcset="./assets/background/backgroundM.webp" type="image/webp">

    <source media="(min-width: 4994px)" srcset="./assets/background/backgroundXXL.jpg" type="image/jpeg">
    <source media="(min-width: 3400px) and (max-width: 4993px)" srcset="./assets/background/backgroundXL.jpg" type="image/jpeg"> 
    <source media="(min-width: 1920px) and (max-width: 3399px)" srcset="./assets/background/backgroundL.jpg" type="image/jpeg"> 
    <source media="(max-width: 1919px)" srcset="./assets/background/backgroundM.jpg" type="image/jpeg"> 
    <img id="background" src="./assets/background/backgroundXL.jpg" alt="Delta building">
  </picture>
  <ConfirmDialog/>
  <Toast/>
  <Header></Header>
  <router-view id="view"/>

</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header.vue'
import '../res/theme.css'        //theme
import 'primevue/resources/primevue.min.css'                  //core css
import 'primeicons/primeicons.css'                            //icons
import 'primeflex/primeflex.css'

import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';

export default {
  components: {
    Header,
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
  width: 105%;
  height: 105%;
  margin: -10px;
  object-fit: cover;


  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
}

#overlay {
  z-index: -999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}




</style>
