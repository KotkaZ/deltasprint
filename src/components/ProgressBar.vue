<template>
  <div @click="test">
    <p class="number" v-for="nr in numberOfTasks" v-badge="bestProgress[nr-1] ? bestProgress[nr-1].total : null" :key="nr" :class="{ my: myProgress == nr}">{{nr}}</p>
  </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: ['numberOfTasks','myProgress','bestProgress'],
    methods:{
      test: function(){
        console.log(this.bestProgress)
      }
    }
}
</script>

<style scoped>
div {
  background: #f4f7f8;
  padding: 20px;
  border-radius: 8px;
}

div .number {
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
}

p.best{
	border-style: dotted;
  border-color: #B5002F;
  color: #151515;
  background: #fff;
}
p.my{
	background: #B79A31;
  color: #fff;
}
</style>