<template>
  <div>
    <LoginWindow v-if="!getStudent" class="login"></LoginWindow>
    <div class="c" v-else>
      <ProgressBar></ProgressBar>
      <ScoreTable></ScoreTable>
      <ExerciseDesc :task="getTask"></ExerciseDesc>
      <UserInfo :student="getStudent"></UserInfo>
      <ExcerciseStn></ExcerciseStn>
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
    ...mapGetters(['getStudent', 'getTask'])
  }

}
</script>

<style scoped>
.login {
  top: 50%;
  -ms-transform: translateY(50%);
  transform: translateY(50%);
}

div.c {
  display: flex;
  flex-wrap: wrap;
}

@media(max-width:768px){
  div.c{
    flex-direction: column;
  }
}

</style>