<template>
  <LoginWindow :competitions="getCompetitions" class="login"/>
</template>

<script>
import LoginWindow from '../components/LoginWindow.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name:"Registration",
  components: {
    LoginWindow
  },
  computed: {
    ...mapGetters(['getCompetitions'])
  },
  methods: {
    ...mapActions(['fetchCompetitions'])
  },
  beforeMount() {
    this.fetchCompetitions();
  }

}
</script>

<style scoped>
.login {
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>