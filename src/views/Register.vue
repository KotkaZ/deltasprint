<template>
  <div class="wrapper p-grid p-jc-center p-ai-center vertical-container p-nogutter">
    <LoginWindow :competitions="getCompetitions" class="p-col-12 p-md-8 p-lg-6 p-xl-4 p-shadow-12"/>
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
.wrapper {
  height: calc(100vh - 62px);
}
</style>