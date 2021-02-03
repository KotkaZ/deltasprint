<template>
	<Card class="card">
		<template #title>Võistleja info</template>

		<template #content>
			<div id="form" class="p-fluid p-grid">
				<div class="p-field p-col-12 p-md-6">
					<span class="p-float-label">
						<InputText type="text" v-model="participant.firstname"/>
						<label>Eesnimi</label>
					</span>
				</div>

				<div class="p-field p-col-12 p-md-6">
					<span class="p-float-label">
						<InputText type="text" v-model="participant.lastname"/>
						<label>Perekonnanimi</label>
					</span>
				</div>

				<div class="p-field p-col-12">
					<span class="p-float-label">
						<InputMask mask="a99999" v-model="participant.studentcode"/>
						<label>Matrikli number</label>
					</span>
				</div>

				<div class="p-field p-col-12">
					<span class="p-float-label">
						<InputText type="email" v-model="participant.email"/>
						<label>Email</label>
					</span>
				</div>

				<div class="p-field p-col-12 p-md-6">
					<span class="p-float-label">
						<Dropdown v-model="participant.studyfield" :options="studyfields"/>
						<label>Vali oma eriala</label>
					</span>
				</div>

				<div class="p-field p-col-12 p-md-6">
					<span class="p-float-label">
						<Dropdown v-model="participant.competition" optionValue="id" :options="competitions" optionLabel="name"/>
						<label>Vali üritus</label>
					</span>
				</div>
			</div>
		</template>

		<template #footer>
			<Button @click="confirmation()" icon="pi pi-check" label="Kinnita"/>
		</template>
    </Card>
</template>

<script>
import { mapActions } from 'vuex';
import joi from 'joi';
import Dropdown from 'primevue/dropdown/sfc';
import Card from 'primevue/card/sfc';
import InputText from 'primevue/inputtext/sfc';
import InputMask from 'primevue/inputmask/sfc';
import Button from 'primevue/button/sfc';

export default {
	name: "LoginWindow",
	components: {
		Dropdown,
		InputText,
		InputMask,
		Button,
		Card
	},
    data: function() {
        return {
			studyfields: ["Infromaatika", "Matemaatika", "Arvutitehnika", "Matemaatiline statistika", "Muu"],
			participant: {
				firstname: undefined,
				lastname: undefined,
				studentcode: undefined,
				email: undefined,
				studyfield: undefined,
				competition: undefined
			}

        }
    },
    methods: {
        ...mapActions(['signinParticipant']),
        validateData: function () {
			const schema = joi.object().keys({
				firstname: joi.string().alphanum().min(3).max(45).required().label('Eesnimi'),
				lastname: joi.string().alphanum().min(3).max(45).required().label('Perekonnanimi'),
				studentcode: joi.string().alphanum().length(6).required().label('Matrikli number'),
				email: joi.string().email({ tlds: {allow: false} }).required().label('Email'),
				studyfield: joi.string().required().label('Eriala'),
				competition: joi.any().required().label('Võistlus')
			});

			return schema.validate(this.participant);
		},
		confirmation: function() {
			this.$confirm.require({
                message: 'Oled valmis võistlusega alustama?',
                header: 'Kinnitus',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
					const validationResult = this.validateData();
                    if(validationResult.error){
						this.$toast.add({severity:'error', summary: 'Veateade', detail:`${validationResult.error.details[0].message}`, life: 3000});
					}
					else{
						this.signinParticipant(this.participant).then(() => {
							this.$router.push('Competition');
						})
						.catch(error => {
							this.$toast.add({severity:'error', summary: 'Veateade', detail:`${error.message}`, life: 3000});
						});

					}	
                },
                reject: () => {}
            });
		}
	},
	props: ['competitions']

}
</script>

<style scoped>
.card {
	border-radius: 10px;
	width: 60%;
}
</style>