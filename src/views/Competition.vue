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
      <ExcerciseStn :competition="getParticipant.competition" :question="getQuestion"></ExcerciseStn>
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
    ...mapActions(['fetchQuestion', 'fetchParticipant', 'fetchProgress']),
    toast: function(error) {
      this.$toast.add({
        severity:'error',
        summary: 'Veateade',
        detail: error.message,
        life: 3000
      });
    }
  },
  created: async function() {
    try{
      if(Object.keys(this.getParticipant).length === 0) await this.fetchParticipant();
      await this.fetchQuestion();
      await this.fetchProgress();
    } catch(error) {
      console.error(error);
      this.toast(error);
    }
    
  }

}
</script>

<style scoped>
.layout{
  padding: 15px;
  margin: 0;
}

</style>