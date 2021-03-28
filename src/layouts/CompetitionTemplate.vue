<template>
  <div class="p-grid p-ai-center p-jc-center vertical-container">
    <img class="p-col-3" :src="competition.icon" alt="" />
    <div class="p-col-9 p-fluid">
      <h3>{{ competition.name }}</h3>
      <ul>
        <li>{{ start }}</li>
        <li>{{ end }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    competition: {
      type: Object,
      required: true,
    },
  },
  computed: {
    start: function() {
      const start = new Date(this.competition.startdate);
      let options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return start.toLocaleTimeString("et-EE", options);
    },
    end: function() {
      const end = new Date(this.competition.endtime);
      let options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return end.toLocaleTimeString("et-EE", options);
    },
  },
};
</script>

<style scoped></style>
