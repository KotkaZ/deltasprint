<template>
  <div class="c">
    <ProgressBar :numberOfTasks="10" :myProgress="getQuestion.number" :bestProgress="6"></ProgressBar>
    <ScoreTable></ScoreTable>
    <ExerciseDesc :task="getQuestion"></ExerciseDesc>
    <UserInfo :participant="getParticipant"></UserInfo>
    <ExcerciseStn :question="getQuestion"></ExcerciseStn>
  </div>
</template>

<script>
import ScoreTable from '../components/ScoreTable.vue'
import ProgressBar from '../components/ProgressBar.vue'
import ExerciseDesc from '../components/ExerciseDesc.vue'
import ExcerciseStn from '../components/ExerciseStn.vue'
import UserInfo from '../components/UserInfo.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name:"Competition",
  components: {
    ScoreTable,
    ProgressBar,
    ExerciseDesc,
    ExcerciseStn, 
    UserInfo
  },
  computed: {
    ...mapGetters(['getAccessToken', 'getQuestion', 'getParticipant'])
  },
  methods: {
    ...mapActions(['fetchQuestion', 'fetchParticipant'])
  },
  beforeMount() {
      if(Object.keys(this.getParticipant).length === 0) this.fetchParticipant();
      this.fetchQuestion();
  }

}
</script>

<style scoped>
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