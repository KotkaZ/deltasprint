<template>
	<Card class="card">
		<template #title>Võistleja info</template>

		<template #content>
			<div id="form" class="p-fluid p-grid">
				<div class="p-field p-col-12 p-md-6">
					<span class="p-float-label">
						<InputText type="text" v-model="participant.firstname" :class="{'p-invalid': validationErrors.firstname}"/>
						<label>Eesnimi</label>
						<small v-show="validationErrors.firstname" class="p-error">{{validationErrors.firstname}}</small>
					</span>
				</div>

				<div class="p-field p-col-12 p-md-6">
					<span class="p-float-label">
						<InputText type="text" v-model="participant.lastname" :class="{'p-invalid': validationErrors.lastname}"/>
						<label>Perekonnanimi</label>
						<small v-show="validationErrors.lastname" class="p-error">{{validationErrors.lastname}}</small>
					</span>
				</div>

				<div class="p-field p-col-12">
					<span class="p-float-label">
						<InputMask mask="a99999" v-model="participant.studentcode" :class="{'p-invalid': validationErrors.studentcode}"/>
						<label>Matrikli number</label>
						<small v-show="validationErrors.studentcode" class="p-error">{{validationErrors.studentcode}}</small>
					</span>
				</div>

				<div class="p-field p-col-12">
					<span class="p-float-label">
						<InputText type="email" v-model="participant.email" :class="{'p-invalid': validationErrors.email}"/>
						<label>Email</label>
						<small v-show="validationErrors.email" class="p-error">{{validationErrors.email}}</small>
					</span>
				</div>

				<div class="p-field p-col-12 p-md-6">
					<span class="p-float-label">
						<Dropdown v-model="participant.studyfield" :options="studyfields" :class="{'p-invalid': validationErrors.studyfield}"/>
						<label>Vali oma eriala</label>
						<small v-show="validationErrors.studyfield" class="p-error">{{validationErrors.studyfield}}</small>
					</span>
				</div>

				<div class="p-field p-col-12 p-md-6">
					<span class="p-float-label">
						<Dropdown v-model="participant.competition" optionValue="id" :options="competitions" optionLabel="name"
						:class="{'p-invalid': validationErrors.competition}"/>
						<label>Vali üritus</label>
						<small v-show="validationErrors.competition" class="p-error">{{validationErrors.competition}}</small>
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
			},
			validationErrors: {},
			errorMessages: {
				'string.base': `{#label} should be a type of 'text'`,
				'string.empty': `{#label} cannot be an empty field`,
				'string.min': `{#label} should have a minimum length of {#limit}`,
				'string.max': `{#label}should have a maximum length of {#limit}`,
				'any.required': `{#label} is a required field`
			},
        }
    },
    methods: {
		...mapActions(['signinParticipant','removeHeaders']),
		toast: function(error) {
            this.$toast.add({
				severity:'error',
				summary: 'Veateade',
				detail: error,
				life: 3000
			});
		},
        validateData: function () {
			const schema = joi.object().keys({
				firstname: joi.string().min(3).max(45).required().pattern(/[A-Za-zöÖüÜäÄõÕ]+/).label('Eesnimi').messages(this.errorMessages),
				lastname: joi.string().min(3).max(45).required().pattern(/[A-Za-zöÖüÜäÄõÕ]+/).label('Perekonnanimi').messages(this.errorMessages),
				studentcode: joi.string().alphanum().length(6).label('Matrikli number').messages(this.errorMessages),
				email: joi.string().email({ tlds: {allow: false} }).required().label('Email').messages(this.errorMessages),
				studyfield: joi.string().required().label('Eriala').messages(this.errorMessages),
				competition: joi.any().required().label('Võistlus').messages(this.errorMessages)
			});

			return schema.validate(this.participant, {abortEarly: false});
		},
		confirmation: function() {
			this.$confirm.require({
                message: 'Oled valmis võistlusega alustama?',
                header: 'Kinnitus',
                icon: 'pi pi-exclamation-triangle',
                accept: () => this.submitAnswer(),
                reject: () => {}
            });
		},
		submitAnswer: async function () {
			try{
				const validationResult = this.validateData();
				this.validationErrors = {};
				if(validationResult.error){
					const error = validationResult.error.details[0]
					this.validationErrors[error.context.key] = error.message;
					throw error;
				}
				await this.signinParticipant(this.participant);
				this.$router.push('Competition');
			}
			catch(error) {
				console.error(error);
				this.toast(error.message);
				this.removeHeaders();
			}
		}
	},
	props: ['competitions']

}
</script>


<style scoped>
.card {
	border-radius: 10px;
}
</style>