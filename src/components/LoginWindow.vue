<template>
    <form @submit.prevent="checkForm">
        <legend><span class="number">!</span> Võistleja info</legend>
        <input type="text" v-model="firstname" placeholder="Eesnimi">
		<input type="text" v-model="lastname" placeholder="Perekonnanimi">
        <input type="text" v-model="studentcode" placeholder="Matrikli number">
        <input type="email" v-model="email" placeholder="Email">
		<label for="studyfield">Õpin:</label>
        <select id="studyfield" v-model="studyfield">
            <option v-for="studies in studyfields" :key="studies" :value="studies">{{ studies }}</option>
        </select> 
        <label for="competition">Võistlus:</label>
        <select id="competition" v-model="competition">
            <option v-for="competition in competitions" :key="competition.id" :value="competition.id">{{ competition.name }}</option>
        </select>      

        <p v-if="errors.length">
            <b>Palun paranda järgnevad vead:</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>

        <input type="submit" value="Alusta!" />
    </form>
</template>

<script>
import { mapActions } from 'vuex';
import joi from 'joi';

export default {
    name: "LoginWindow",
    data: function() {
        return {
            errors: [],
			firstname: undefined,
			lastname: undefined,
			studentcode: undefined,
			studyfield: undefined,
            email: undefined,
			competition: undefined,
			studyfields: ["Infromaatika", "Matemaatika", "Arvutitehnika", "Matemaatiline statistika"]

        }
    },
    methods: {
        ...mapActions(['signinParticipant']),
        checkForm: function () {
			try{
				const schema = joi.object().keys({
					firstname: joi.string().min(3).max(45).required().label('Eesnimi'),
					lastname: joi.string().min(3).max(45).required().label('Perekonnanimi'),
					studentcode: joi.string().alphanum().length(6).required().label('Matrikli number'),
					email: joi.string().email({ tlds: {allow: false} }).required().label('Email'),
					studyfield: joi.string().required().label('Eriala'),
					competition: joi.any().required().label('Võistlus')
				});

				const participant = {
					firstname: this.firstname,
					lastname: this.lastname,
					studentcode: this.studentcode,
					email: this.email,
					studyfield: this.studyfield,
					competition: this.competition
				}

				const result = schema.validate(participant);
				
				if(result.error) throw result.error.details[0].message;

				this.signinParticipant(participant).then(() => {
					this.$router.push('Competition');
				})
				.catch(error => console.log(error));
			
			}
			catch (e){
				//TODO: Translate error messages to Estonian.
				this.errors = [];
				this.errors.push(e);
			}
        }
	},
	props: ['competitions']

}
</script>

<style scoped>
b {
    color: #B5002F;
}
ul {
    font-weight: bold;
    margin-left: 15px;
    margin-bottom: 15px;
}
form {
	max-width: 500px;
	padding: 10px 20px;
	background: #f4f7f8;
	margin: 10px auto;
	padding: 20px;
	background: #f4f7f8;
	border-radius: 8px;
}
form fieldset{
	border: none;
}
form legend {
	font-size: 1.4em;
	margin-bottom: 10px;
}
form label {
	display: block;
	margin-bottom: 8px;
}
form input[type="text"],
form input[type="date"],
form input[type="datetime"],
form input[type="email"],
form input[type="number"],
form input[type="search"],
form input[type="time"],
form input[type="url"],
form textarea,
form select {
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	width: 100%;
	box-sizing: border-box; 
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box; 
	background-color: #e8eeef;
	color:#8a97a0;
	-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	margin-bottom: 30px;
}
form input[type="text"]:focus,
form input[type="date"]:focus,
form input[type="datetime"]:focus,
form input[type="email"]:focus,
form input[type="number"]:focus,
form input[type="search"]:focus,
form input[type="time"]:focus,
form input[type="url"]:focus,
form textarea:focus,
form select:focus{
	background: #d2d9dd;
}
form select{
	-webkit-appearance: menulist-button;
	height:35px;
}
form .number {
	background: #B79A31;
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

form input[type="submit"],
form input[type="button"]
{
	position: relative;
	display: block;
	padding: 19px 39px 18px 39px;
	color: #FFF;
	margin: 0 auto;
	background: #B79A31;
	font-size: 18px;
	text-align: center;
	font-style: normal;
	width: 100%;
	border: 1px solid #B5002F;
	border-width: 1px 1px 3px;
    border-radius: 4px;
	margin-bottom: 10px;
}
form input[type="submit"]:hover,
form input[type="button"]:hover
{
	background: #109177;
}
</style>