<template>
    <div class="p-d-flex p-jc-between">
        <div class="p-card-title">{{title}}</div>
        <Button id="button" icon="pi pi-times" class="p-button-outlined" @click="$router.push('/')"/>
    </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    name:'CardTitle',
    components: {
        Button
    },
    props:['title']
}
</script>

<style scoped>
#button{
  color: #1B1B1F;
}
</style>