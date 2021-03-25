<template>
  <div class="p-grid nested-grid p-nogutter">
    <div class="p-col-12 p-lg-3">
      <div class="p-grid p-nogutter">
        <div class="p-col-12 p-px-md-3 p-p-0">
          <ProgressBar
            :numberOfTasks="getQuestion.total"
            :myProgress="getQuestion.number"
            :bestProgress="getProgress"
            :competition="getParticipant.competition"
          ></ProgressBar>
        </div>
        <div class="p-col-12 p-px-md-3 p-pt-md-3 p-p-0">
          <UserInfo :participant="getParticipant"></UserInfo>
        </div>
      </div>
    </div>

    <div class="p-col-12 p-lg-9">
      <div class="p-grid p-nogutter">
        <div class="p-col-12 p-px-md-3 p-pt-md-3 p-pt-lg-0 p-pl-lg-0 p-p-0">
          <ExerciseDesc :task="getQuestion"></ExerciseDesc>
        </div>
        <div class="p-col-12 p-px-md-3 p-pt-md-3 p-pl-lg-0 p-p-0">
          <ExcerciseStn
            :competition="getParticipant.competition"
            :question="getQuestion"
          ></ExcerciseStn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import ExerciseDesc from "@/components/ExerciseDesc.vue";
import ExcerciseStn from "@/components/ExerciseStn.vue";
import UserInfo from "@/components/UserInfo.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Competition",
  components: {
    ProgressBar,
    ExerciseDesc,
    ExcerciseStn,
    UserInfo,
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    ...mapGetters([
      "getAccessToken",
      "getQuestion",
      "getParticipant",
      "getProgress",
    ]),
  },
  methods: {
    ...mapActions(["fetchQuestion", "fetchParticipant", "fetchProgress"]),
    toast: function(error) {
      this.$toast.add({
        severity: "error",
        summary: "Veateade",
        detail: error.message,
        life: 3000,
      });
    },
  },
  created: async function() {
    try {
      if (Object.keys(this.getParticipant).length === 0)
        await this.fetchParticipant();
      await this.fetchQuestion();
      this.timer = setInterval(this.fetchProgress, 15000);
    } catch (error) {
      console.error(error);
      this.toast(error);
    }
  },
  beforeUnmount: function() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped></style>
