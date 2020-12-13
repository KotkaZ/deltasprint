<template>
  <div>
    <LoginWindow></LoginWindow>
    <ProgressBar></ProgressBar>
    <ScoreTable></ScoreTable>
    <ExerciseDesc></ExerciseDesc>
    <ExcerciseStn></ExcerciseStn>
    <UserInfo></UserInfo>
  </div>
</template>

<script>
import ScoreTable from '../components/ScoreTable.vue'
import ProgressBar from '../components/ProgressBar.vue'
import ExerciseDesc from '../components/ExerciseDesc.vue'
import ExcerciseStn from '../components/ExerciseStn.vue'
import UserInfo from '../components/UserInfo.vue'
import LoginWindow from '../components/LoginWindow.vue'

export default {
  name:"Competition",
  components: {
    ScoreTable,
    ProgressBar,
    ExerciseDesc,
    ExcerciseStn, 
    UserInfo,
    LoginWindow
  }

}
</script>

<style scoped>

</style>