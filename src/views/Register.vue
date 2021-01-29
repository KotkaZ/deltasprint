<template>
  <div>
    <LoginWindow :competitions="getCompetitions" class="login"></LoginWindow>
  </div>
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
  top: 50%;
  -ms-transform: translateY(50%);
  transform: translateY(50%);
}
</style>