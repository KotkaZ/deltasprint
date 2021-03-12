<template>
  <div class="p-grid p-nogutter p-jc-center">
      <div class="p-col-12 p-sm-4 p-md-3 p-lg-2 side left-side">
        <h1>Platvorm</h1>
      </div>
      <div class="p-col-12 p-sm-8 p-md-5 p-lg-4 side right-side">
        <p>
            Käesolev platvorm on loodud eelkõige ametlike DeltaSprint ürituste korraldamiseks.
            Keskkonna teeb unikaalseks võimalus näha teiste võistlejate progressi, mis tekitab
            korraliku võistlusmomendi. See on sageli puuduv komponent matemaatika ja programmeerimisvõistlustel.
            Ülesannete vastusteks saavad olla konkreetsed numbrid, sõnad või tähed, mille õigsust
            kontrollitakse juba vastuse esitamisel. Uut ülesannet ei anta kätte, kui vastus on vale.
            Ülesannetega käivad kaasas lahendused, mis võivad olla faili, teksti või pildi kujul.
            <br><br> Soovid enda üritust sellel platvormil? Võta meiega ühendust!
        </p>
      </div>
  </div>
</template>

<script>
export default {
    name:"HomePlatform",
}
</script>

<style scoped>
div .side {
    padding: 10px;
}

div .left-side{
    text-align: right;
    padding: 10px;
    border-right: 3px solid #fff;
}
div .right-side{
    border-radius: 3px;
    background-color: #1B1B1F80;
    line-height: 1.5;
}

h1, p{
    font-family: 'Rubik';
    color: white;
}

h1 {
    text-shadow: 2px 2px #1B1B1F80;
}


</style>