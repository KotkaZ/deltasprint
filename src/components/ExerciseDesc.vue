<template>
    <div>
        <p>{{ task.describtion }}</p>
        <hr>
        <p>{{ task.task }}</p>
        <hr>
        <img v-if="task.media" :src="task.media" alt="Task image">
    </div>
  
</template>

<script>
export default {
    name: "ExerciseDescribtion",
    props: ['task']
}
</script>

<style scoped>
div {
    flex-basis: 70%;
    margin: 10px;
    padding: 10px 20px;
    background: #f4f7f8;
    padding: 20px;
    background: #f4f7f8;
    border-radius: 8px;
}
</style>