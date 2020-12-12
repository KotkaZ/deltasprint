<template>
  <div>
    <ProgressBar></ProgressBar>
    <ScoreTable></ScoreTable>
    <ExerciseDesc></ExerciseDesc>
    <ExcerciseStn></ExcerciseStn>
  </div>
</template>

<script>
import ScoreTable from '../components/ScoreTable.vue'
import ProgressBar from '../components/ProgressBar.vue'
import ExerciseDesc from '../components/ExerciseDesc.vue'
import ExcerciseStn from '../components/ExerciseStn.vue'
export default {
  name:"Competition",
  components: [ScoreTable, ProgressBar, ExerciseDesc, ExcerciseStn]

}
</script>

<style scoped>

</style>