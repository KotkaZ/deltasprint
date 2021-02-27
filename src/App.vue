<template>
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lora" />
  <ConfirmDialog/>
  <Toast/>
  <Header></Header>
  <router-view/>
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
  /*font-family: 'Lora';*/
  outline: none;
  margin: 0;
}


body {
  background-image: url('assets/background/Sügisvärvid_ja_Delta.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}


</style>
