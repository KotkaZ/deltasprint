<template>
  <div>
    <LoginWindow v-if="!getStudent" class="login"></LoginWindow>
    <div v-else>
      <ProgressBar></ProgressBar>
      <ScoreTable></ScoreTable>
      <ExerciseDesc></ExerciseDesc>
      <ExcerciseStn></ExcerciseStn>
      <UserInfo :student="getStudent"></UserInfo>
    </div>

  </div>
</template>

<script>
import ScoreTable from '../components/ScoreTable.vue'
import ProgressBar from '../components/ProgressBar.vue'
import ExerciseDesc from '../components/ExerciseDesc.vue'
import ExcerciseStn from '../components/ExerciseStn.vue'
import UserInfo from '../components/UserInfo.vue'
import LoginWindow from '../components/LoginWindow.vue'
import { mapGetters } from 'vuex'

export default {
  name:"Competition",
  components: {
    ScoreTable,
    ProgressBar,
    ExerciseDesc,
    ExcerciseStn, 
    UserInfo,
    LoginWindow
  },
  computed: {
    ...mapGetters(['getStudent'])
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