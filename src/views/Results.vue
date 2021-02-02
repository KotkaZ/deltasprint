<template>
  <div>
    <DataTable :value="getResults" removableSort class="p-datatable-sm p-datatable-striped" ref="dt">
      <template #header>
        <div style="text-align: right">
            <Dropdown v-model="selectedCompetition"  @change="onChange()" :options="getCompetitions" optionLabel="name" placeholder="Vali üritus" />
            <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
        </div>
      </template>

      <Column field="firstname" header="Eesnimi" :sortable="true"></Column>
      <Column field="lastname" header="Perekonnanimi" :sortable="true"></Column>
      <Column field="endtime" header="Lõpuaeg" :sortable="true"></Column>

      <template #footer>
        Kokku on võistlusel osalenud {{getResults ? getResults.length : 0 }} tudengit.
      </template>
    </DataTable>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DataTable from 'primevue/datatable/sfc';
import Dropdown from 'primevue/dropdown/sfc';
import Column from 'primevue/column/sfc';
import Button from 'primevue/button/sfc';

export default {
  name: "Results",
  components: {
    DataTable,
    Dropdown,
    Column,
    Button
  },
  data(){
    return { 
      selectedCompetition: null
    }
  },
  computed:{
    ...mapGetters(['getResults', 'getCompetitions'])
  },
  methods: {
    ...mapActions(['fetchResults', 'fetchCompetitions']),
    onChange: function() {
      this.fetchResults(this.selectedCompetition.id);
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
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