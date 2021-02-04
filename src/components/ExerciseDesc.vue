<template>
    <div class="flex-container">
        <div>
            <h2>Kirjeldus</h2>
            <p>{{ task.question }}</p>
        </div>
    </div>
  
</template>

<script>
export default {
    name: "ExerciseDescribtion",
    props: ['task']
}
</script>

<style scoped>

div.flex-container {
    padding: 20px;
    background: #f4f7f8;
    border-radius: 8px;
}



</style>