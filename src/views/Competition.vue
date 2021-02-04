<template>
  <div class="layout p-fluid p-fromgrid p-grid">
    <div class="p-field p-col-12 p-md-3">
      <ProgressBar :numberOfTasks="getQuestion.total" :myProgress="getQuestion.number" :bestProgress="getProgress"></ProgressBar>
    </div>

    <div class="p-field p-col-12 p-md-9">
      <ExerciseDesc :task="getQuestion"></ExerciseDesc>
    </div>

    <div class="p-field p-col-12 p-md-3">
      <UserInfo :participant="getParticipant"></UserInfo>
    </div>

    <div class="p-field p-col-12 p-md-9">
      <ExcerciseStn :question="getQuestion"></ExcerciseStn>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue'
import ExerciseDesc from '../components/ExerciseDesc.vue'
import ExcerciseStn from '../components/ExerciseStn.vue'
import UserInfo from '../components/UserInfo.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name:"Competition",
  components: {
    ProgressBar,
    ExerciseDesc,
    ExcerciseStn, 
    UserInfo
  },
  computed: {
    ...mapGetters(['getAccessToken', 'getQuestion', 'getParticipant', 'getProgress'])
  },
  methods: {
    ...mapActions(['fetchQuestion', 'fetchParticipant', 'fetchProgress'])
  },
  beforeMount() {
      if(Object.keys(this.getParticipant).length === 0) this.fetchParticipant();
      this.fetchQuestion();
      this.fetchProgress();
  }

}
</script>

<style scoped>
.layout{
  padding: 15px;
  margin: 0;
}

</style>