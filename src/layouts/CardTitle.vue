<template>
  <div class="p-d-flex p-jc-between">
    <div class="p-card-title">{{ title }}</div>
    <div>
      <Button
        v-if="reloadFunction"
        id="button"
        icon="pi pi-spinner"
        class="p-button-outlined p-mr-2"
        @click="$emit('reload')"
      />
      <Button
        id="button"
        icon="pi pi-times"
        class="p-button-outlined"
        @click="$router.push('/')"
      />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  name: "CardTitle",
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    reloadFunction: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
#button {
  color: #1b1b1f;
}
</style>
