<template>
  <Card>
    <template #title>
      <CardTitle
        title="Võistluse valimine"
        :reloadFunction="true"
        @reload="this.$emit('reload')"
      />
    </template>

    <template #content>
      <div class="p-fluid">
        <Listbox
          v-model="selectedCompetition"
          :options="competitions"
          :filter="true"
          optionLabel="name"
          filterPlaceholder="Otsi"
          class="p-field"
        >
          <template #option="slotProps">
            <CompetitionTemplate :competition="slotProps.option" />
          </template>
        </Listbox>

        <div class="p-field p-field-checkbox">
          <Checkbox v-model="checked" :binary="true" />
          <label for="binary"
            >Kinnitan, et minu andmed on õiged ja olen põhjalikult tutvunud
            ürituse statuudiga.</label
          >
        </div>
      </div>
    </template>

    <template #footer>
      <div class="p-grid p-formgrid p-fluid">
        <div class="p-col-6">
          <Button
            @click="this.$emit('back')"
            icon="pi pi-arrow-left"
            label="Tagasi"
            class="p-button-secondary"
          />
        </div>

        <div class="p-col-6">
          <Button
            @click="this.$emit('start', this.selectedCompetition)"
            icon="pi pi-check"
            label="Võistlema"
            :disabled="!checked || !selectedCompetition"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Listbox from "primevue/listbox";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import CardTitle from "@/layouts/CardTitle";
import CompetitionTemplate from "@/layouts/CompetitionTemplate";

export default {
  name: "LoginWindow",
  components: {
    Listbox,
    Button,
    CardTitle,
    Checkbox,
    CompetitionTemplate,
    Card,
  },
  data: function() {
    return {
      selectedCompetition: undefined,
      checked: false,
    };
  },
  props: {
    competitions: Array,
  },
};
</script>

<style scoped></style>
