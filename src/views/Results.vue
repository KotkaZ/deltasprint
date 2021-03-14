<template>
  <div class="p-d-flex p-jc-center">
    <Card class="p-col-12 p-md-8 p-shadow-12">
      <template #title>
        <CardTitle title="Võistluste tulemused"/>
      </template>

      <template #content>
        <DataTable :value="getFormatedResults" removableSort class="p-datatable-sm p-datatable-striped" ref="dt" :autoLayout="true"
        v-model:filters="filters" :scrollable="true">
          
          <template #header>
            <div class="p-d-flex p-jc-end">
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
            Kokku lõpetas võistluse {{getResults ? getResults.length : 0 }} tudengit.
          </template>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script>
import humanizeDuration from 'humanize-duration';
import { mapActions, mapGetters } from 'vuex';
import DataTable from 'primevue/datatable/sfc';
import Dropdown from 'primevue/dropdown/sfc';
import Column from 'primevue/column/sfc';
import CardTitle from '../components/CardTitle';
import InputText from 'primevue/inputtext/sfc';
import Card from 'primevue/card/sfc';
import Button from 'primevue/button/sfc';
import {FilterMatchMode} from 'primevue/api';

export default {
  name: "Results",
  components: {
    DataTable,
    Dropdown,
    Card,
    Column,
    InputText,
    Button,
    CardTitle
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
      if(!results.length || !this.selectedCompetition) return null;

      results.sort((a,b) => {
        if(a.endtime && b.endtime) return new Date(a.endtime) - new Date(b.endtime);
        if(a.endtime) return -1;
        return 1;
      });

      let place = 1;

      results.forEach((el) => {
        el.place = place++;
        if(el.endtime){
          const diff =  new Date(el.endtime) - new Date(this.selectedCompetition.startdate);
          el.finalTime = humanizeDuration(diff, { language: "et" });
        }
        else el.finalTime = "DNF"
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
  },
  unmounted: function() {
    this.selectedCompetition = null;
  }

}
</script>

<style scoped>
#goback{
  color: #1B1B1F;
}
</style>