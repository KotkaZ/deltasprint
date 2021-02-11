<template>
    <Card>
		<template #title>Ülesanne {{task.number}}.</template>

		<template #content>
            <span v-html="task.question"></span>
        </template>
    </Card>
</template>

<script>
import Card from 'primevue/card/sfc';

export default {
    name: "ExerciseDescribtion",
    components: {
        Card
    },
    props: ['task']
}
</script>

<style scoped>




</style>