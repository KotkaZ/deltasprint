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
import 'primevue/resources/themes/saga-blue/theme.css'        //theme
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
* {
  /*font-family: 'Lora';*/
  outline: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}


body {
  background-image: url('assets/background.jpg');
  color: #1B1B1F;
}

</style>
