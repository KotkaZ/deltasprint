<template>
  <div class="p-d-flex p-jc-center">
    <Card class="p-col-12 p-md-8 p-shadow-12">

      <DataTable :value="getFormatedResults" removableSort class="p-datatable-sm p-datatable-striped" ref="dt" :autoLayout="true"
      v-model:filters="filters">
        <template #header>
          <div class="p-d-flex p-jc-between">
            <h2 class="p-m-0">Võistluste tulemused</h2>
            <div>
              <Dropdown v-model="selectedCompetition"  @change="onChange()" :options="getCompetitions" optionLabel="name" placeholder="Vali üritus" class="p-mr-2" />
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters.global.value" placeholder="Otsi viidet" class="p-mr-2"/>
              </span>
              <Button icon="pi pi-external-link" label="Laadi alla" @click="exportCSV($event)" />
            </div>
          </div>
        </template>

        <Column field="place" header="Koht" :sortable="true"/>
        <Column field="firstname" header="Eesnimi" :sortable="true"/>
        <Column field="lastname" header="Perekonnanimi" :sortable="true"/>
        <Column field="finalTime" header="Lõpuaeg" :sortable="true"/>
        <Column field="comments" header="Märkmed" :sortable="true"/>

        <template #footer>
          Kokku on lõpetas võistluse {{getResults ? getResults.length : 0 }} tudengit.
        </template>
      </DataTable>
    </Card>
  </div>
</template>

<script>
import humanizeDuration from 'humanize-duration';
import { mapActions, mapGetters } from 'vuex';
import DataTable from 'primevue/datatable/sfc';
import Dropdown from 'primevue/dropdown/sfc';
import Column from 'primevue/column/sfc';
import Button from 'primevue/button/sfc';
import InputText from 'primevue/inputtext/sfc';
import {FilterMatchMode} from 'primevue/api';

export default {
  name: "Results",
  components: {
    DataTable,
    Dropdown,
    Column,
    Button,
    InputText
  },
  data(){
    return { 
      selectedCompetition: null,
      filters: { 'global': {value: null, matchMode: FilterMatchMode.CONTAINS}}
    }
  },
  computed:{
    ...mapGetters(['getResults', 'getCompetitions']),
    getFormatedResults: function(){
      const results = this.getResults;
      if(!results.length) return null;
      results.sort((a,b) => new Date(a.endtime) - new Date(b.endtime));
      let place = 1;
      results.forEach((el) => {
        el.place = place++;
        const diff =  new Date(el.endtime) - new Date(this.selectedCompetition.startdate);
        el.finalTime = humanizeDuration(diff, { language: "et" });
      });

      return results;
    }
  },
  methods: {
    ...mapActions(['fetchResults', 'fetchCompetitions']),
    onChange: async function() {
      try{
        await this.fetchResults(this.selectedCompetition.id);
      } catch(error) {
        console.error(error);
        this.toast(error);
      }
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
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
      await this.fetchCompetitions();
    } catch(error) {
      console.error(error);
      this.toast(error);
    }
  }

}
</script>

<style scoped>

</style>