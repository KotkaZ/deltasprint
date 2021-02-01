<template>
  <div>
    <select id="competitionSelection" @change="onChange($event)">
      <option v-for="competition in getCompetitions" :key="competition.id"
       :value="competition.id">
       {{ competition.name }}
       </option>
    </select> 
    <table>
      <tr>
        <th>Koht</th>
        <th>Nimi</th>
        <th>Lõpuaeg</th>
      </tr>
      <tr v-for="(participant, index) in getResults" :key="participant">
        <td>{{ index + 1 }}</td>
        <td>{{ participant.firstname }}</td>
        <td>{{ participant.endtime }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Results",
  computed:{
    ...mapGetters(['getResults', 'getCompetitions'])
  },
  methods: {
    ...mapActions(['fetchResults', 'fetchCompetitions']),
    onChange: function(event) {
      this.fetchResults(event.target.value);
    }
  },
  beforeMount() {
    this.fetchCompetitions();
  }

}
</script>

<style scoped>
table {
  color: white;
}

</style>