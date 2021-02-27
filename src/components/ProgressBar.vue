<template>
  <Card>
    <template #title>Areng</template>
    <template #content class="p-fluid"> 
      <p class="number" v-for="nr in numberOfTasks" v-badge="bestProgress[nr-1] ? (bestProgress[nr-1].total > 99 ? '99+' : bestProgress[nr-1].total) : null"
       :key="nr" :class="{ my: myProgress == nr}">{{nr}}</p>      
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card/sfc';
export default {
    name: "ProgressBar",
    components: {
      Card
    },
    props: ['numberOfTasks','myProgress','bestProgress'],
}
</script>

<style scoped>
.number {
	background: #151515;
	color: #fff;
	height: 30px;
	width: 30px;
	display: inline-block;
	font-size: 0.8em;
	margin-right: 4px;
	line-height: 30px;
	text-align: center;
	text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	border-radius: 15px 15px 15px 0px;
}

p{
  font-weight: bold;
  margin: 5px;
}

p.my{
	background: #B5002F;
  color: #fff;
}
</style>