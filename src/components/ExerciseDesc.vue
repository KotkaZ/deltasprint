<template>
    <div class="flex-container">
        <div>
            <h2>Kirjeldus</h2>
            <p>{{ task.describtion }}</p>
        </div>
        
        
        <div>
            <h2>Ülesanne</h2>
            <p>{{ task.task }}</p>
        </div>
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

div.flex-container {
    flex-basis: 70%;
    display: flex;
    flex-flow: row;

    margin: 10px;
    padding: 10px 20px;
    background: #f4f7f8;
    padding: 20px;
    background: #f4f7f8;
    border-radius: 8px;
}
@media(max-width:768px){
  div.flex-container{
    flex-flow: column;
  }
}

p{
    flex-basis: 70%;
    padding-right: 15px;
    text-align: justify;
}
img{
    align-self: flex-start;
    width: 30%;
    flex-basis: 30%;
}
</style>