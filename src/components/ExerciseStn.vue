<template>
  <form @submit.prevent="checkForm">
    <legend><span class="number">!</span> Lahendus</legend>
    <textarea name="field3" placeholder="Lahenduskäik"></textarea>
    <input type="text" v-model="code" placeholder="Vastus">

    <p v-if="errors.length">
        <b>Palun paranda järgnevad vead:</b>
        <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </p>

    <input type="submit" value="Esita lahendus" />
  </form>
</template>

<script>
export default {
    name: "ExerciseSolution",
    data: function(){
      return {
          errors: []
      }
    },
    methods: {
      checkForm: function () {
            if (this.name && this.age) return true;
            
            this.errors = [];

            if (!this.name) this.errors.push('Nimi on puudu!');
            if (!this.code) this.errors.push('Matrikli number on puudu!');
            if (!this.email) this.errors.push('Email on puudu!');
            if (!this.competition) this.errors.push('Võistlus pole valitud!');
        }
    }
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
  flex-basis: 70%;
  margin: 10px;
	background: #f4f7f8;
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
form textarea{
  resize: vertical;
  height: 200px;
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