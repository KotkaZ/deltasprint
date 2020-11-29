<template>
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lora" />
  <Header></Header>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
* {
  font-family: 'Lora';
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
  background-image: #FFFFFF;
  color: #1B1B1F;
}

</style>
