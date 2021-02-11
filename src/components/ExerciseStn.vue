<template>
	<BlockUI :blocked="blockedPanel">
		<Card class="test">
			<template #content>
				<div class="p-fluid p-grid nested-grid">
					<div class="p-col-12">
						<Editor v-model="description" editorStyle="height: 320px" placeholder="Lahenduse kirjeldus"/>
					</div>

					
					<div class="p-col-12 p-md-4">
						<div class="p-grid">
							<div class="p-col-12">	
								<span class="p-float-label">
									<InputText type="text" v-model="answer"/>
									<label>Vastus</label>
								</span>
							</div>
							<div class="p-col-12">
								<ProgressBar :value="getUploadPercentage" />
							</div>
						</div>
					</div>

					

					<div class="p-col-12 p-md-4">
						<div class="p-grid">
							<div class="p-col-12">
								<FileUpload class="upload" :maxFileSize="3000000" :fileLimit="1" :auto="true"
									chooseLabel="Vali fail" :customUpload="true" @uploader="fileHandler" mode="basic" ref="files">
								</FileUpload>
								<Button @click="clearFile()" :disabled="!file" icon="pi pi-times" />
							</div>
							<div class="p-col-12">
								<h5>{{file ? file.name : ''}}</h5>
							</div>
						</div>						
					</div>

					<div class="p-col-12 p-md-4">
						<Button @click="submitAnswer()" icon="pi pi-send" label="Esita lahendus"/>
					</div>

				</div>
			</template>
		</Card>
	</BlockUI>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Editor from 'primevue/editor/sfc';
import InputText from 'primevue/inputtext/sfc';
import Button from 'primevue/button/sfc';
import FileUpload from 'primevue/fileupload/sfc';
import ProgressBar from 'primevue/progressbar/sfc';
import Card from 'primevue/card/sfc';
import BlockUI from 'primevue/blockui';

export default {
	name: "ExerciseSolution",
	components:{
		Editor,
		InputText,
		Button,
		BlockUI,
		Card,
		FileUpload,
		ProgressBar
	},
    data: function(){
      return {
		blockedPanel: false,
		description: null,
		answer: null,
		file: ''
      }
	},
	computed: {
		...mapGetters(['getUploadPercentage']),
	},
    methods: {
		...mapActions(['submitResult', 'fetchQuestion', 'removeHeaders']),
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
					this.blockedPanel = true;
					await this.submitResult(formData);
					this.$toast.add({severity:'success', summary: 'Teade', detail:'Lahendus edukalt esitatud', life: 3000});

					if(this.question.number === this.question.total){
						this.$toast.add({severity:'success', summary: 'Teade', detail:'Võistlus edukalt lõpetatud!', life: 3000});
						this.removeHeaders();
						this.$router.push({ name: 'Feedback', params: { id: this.competition } });
					}
					else{
						this.description = null;
						this.answer = null;
						this.clearFile();
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
					this.blockedPanel = false;
				}
			}	
		},
		fileHandler: function(event){
			this.file = event.files[0];
		},
		clearFile: function(){
			this.file = '';
			this.$refs.files.uploadedFileCount = 0;
			this.$refs.files.clear();
		}
	},
	props: ['question', 'competition']
}
</script>

<style scoped>
.upload{
	display: inline;
	margin-right: 5px;
}
</style>