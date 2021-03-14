<template>
  <Card>
    <template #title>Areng</template>
    <template #content class="p-fluid"> 
      <p class="number" v-for="nr in numberOfTasks" v-badge="bestProgress[nr-1] ? (bestProgress[nr-1].total > 99 ? '99+' : bestProgress[nr-1].total) : null"
      :key="nr" :class="{ my: myProgress == nr}">{{nr}}</p>      
    </template>
    <template #footer>
      <Button id="giveup" @click="confirmation()" class="p-button-danger" icon="pi pi-ban" label="Annan alla!"/>
    </template>
  </Card>
</template>

<script>
import { mapActions } from 'vuex';
import Card from 'primevue/card/sfc';
import Button from 'primevue/button';
export default {
    name: "ProgressBar",
    components: {
      Button,
      Card
    },
    methods: {
      ...mapActions(['removeHeaders']),
      confirmation: function() {
        this.$confirm.require({
          message: 'Kinnitate, et soovite võistlusel alla vanduda?',
          header: 'Kinnitus',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.removeHeaders();
            this.$router.push('/')
          },
          reject: () => {}
        });
      }
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

#giveup{
  width: 100%;
}
</style>