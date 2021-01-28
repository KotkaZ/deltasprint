<template>
  <div>
    <p class="number" v-for="nr in numberOfTasks" :key="nr" :class="{ best: bestProgress == nr, my: myProgress == nr}">{{nr}}</p>
  </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: ['numberOfTasks','myProgress','bestProgress'],
    created: function () {
    }
}
</script>

<style scoped>
div {
  margin: 10px;
  flex-basis: 100%;
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;

  display: flex;
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