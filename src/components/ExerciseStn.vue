<template>
	
	<div class="form p-fluid p-grid">

		<div class="p-field p-col-12">
			<Editor v-model="description" editorStyle="height: 320px" placeholder="Lahenduse kirjeldus"/>
		</div>

		
		<div class="p-field p-col-12 p-md-6">
			<span class="p-float-label">
				<InputText type="text" v-model="answer"/>
				<label>Vastus</label>
			</span>
		</div>

		<div class="p-field p-col-12 p-md-6">
			<ProgressBar :value="getUploadPercentage" />
		</div>

		<div class="p-field p-col-12">
			<FileUpload name="demo[]" :maxFileSize="3000000" :fileLimit="1" :showUploadButton="false"
				chooseLabel="Vali fail" :auto="true" :customUpload="true" @uploader="fileHandler" ref="files">
				<template #empty><p>Lohista failid siia...</p></template>
			</FileUpload>
		</div>

		<div class="p-field p-col-12">
			<Button @click="submitAnswer()" icon="pi pi-send" label="Esita lahendus"/>
		</div>

	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Editor from 'primevue/editor/sfc';
import InputText from 'primevue/inputtext/sfc';
import Button from 'primevue/button/sfc';
import FileUpload from 'primevue/fileupload/sfc';
import ProgressBar from 'primevue/progressbar/sfc';

export default {
	name: "ExerciseSolution",
	components:{
		Editor,
		InputText,
		Button,
		FileUpload,
		ProgressBar
	},
    data: function(){
      return {
		description: null,
		answer: null,
		file: ''
      }
	},
	computed: {
		...mapGetters(['getUploadPercentage']),
	},
    methods: {
		...mapActions(['submitResult', 'fetchQuestion']),
		...mapMutations(['setUploadPercentage']),
		toast: function(message) {
			this.$toast.add({
				severity:'error',
				summary: 'Veateade',
				detail: message,
				life: 3000
			});
		},
		submitAnswer: async function () {	

			if (!this.description && !this.file) this.toast('Lahenduskäik on puudu. Lisage see tektsi või failikujul.');
			else if (!this.answer) this.toast('Vastus on puudu.');
			else{
				let formData = new FormData();
				formData.append('question', this.question.id);
				formData.append('description', this.description);
				formData.append('answer', this.answer);
				formData.append('file', this.file);

				try{
					await this.submitResult(formData);
					this.$toast.add({severity:'success', summary: 'Teade', detail:'Lahendus edukalt esitatud', life: 3000});

					if(this.question.number === this.question.total){
						this.$toast.add({severity:'success', summary: 'Teade', detail:'Võistlus edukalt lõpetatud!', life: 3000});
						//TODO
					}
					else{
						this.description = null;
						this.answer = null;
						this.file = '';
						this.$refs.files.clear();
						await this.fetchQuestion();
					}
				}
				catch(error){
					let message = error.message;
					if(error.response && error.response.status == 409) message = "Vastus on vale!"
					this.toast(message);
				}
				finally{
					this.setUploadPercentage(0);
				}
			}	
		},
		fileHandler: function(event){
			this.file = event.files[0];
		}
	},
	props: ['question']
}
</script>

<style scoped>
div.form {
	margin: 0;
	padding: 20px;
	background: #f4f7f8;
	border-radius: 8px;
}
</style>