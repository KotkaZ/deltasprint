<template>
  <div
    class="wrapper p-grid p-jc-center p-ai-center vertical-container p-nogutter"
  >
    <LoginWindow
      v-if="!validParticipant"
      @validated="saveParticipant"
      class="p-col-12 p-md-8 p-lg-6 p-xl-4 p-shadow-12"
    />

    <CompetitionSelection
      v-else-if="validParticipant"
      :competitions="getAvailableCompetitions"
      @back="validParticipant = false"
      @reload="reloadCompetitions"
      @start="startEvent"
      class="p-col-12 p-md-8 p-lg-6 p-xl-4 p-shadow-12"
    />
  </div>
</template>

<script>
import LoginWindow from "@/components/LoginWindow.vue";
import CompetitionSelection from "@/components/CompetitionSelection.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      participant: {},
      validParticipant: false,
    };
  },
  components: {
    LoginWindow,
    CompetitionSelection,
  },
  computed: {
    ...mapGetters(["getAvailableCompetitions"]),
  },
  methods: {
    ...mapActions([
      "fetchAvailableCompetitions",
      "removeHeaders",
      "signinParticipant",
    ]),
    toast: function(error) {
      this.$toast.add({
        severity: "error",
        summary: "Veateade",
        detail: error.message,
        life: 3000,
      });
    },
    reloadCompetitions: async function() {
      try {
        await this.fetchAvailableCompetitions();
      } catch (error) {
        console.error(error);
        this.toast(error);
      }
    },
    saveParticipant: function(participant) {
      this.participant = participant;
      this.validParticipant = true;
    },

    startEvent: async function(competition) {
      try {
        this.participant.competition = competition.id;
        await this.signinParticipant(this.participant);
        this.$router.push("/competition");
      } catch (error) {
        console.error(error);
        this.toast(error.message);
        this.removeHeaders();
      }
    },
  },
  created: async function() {
    try {
      await this.fetchAvailableCompetitions();
    } catch (error) {
      console.error(error);
      this.toast(error);
    }
  },
};
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 62px);
}
</style>
