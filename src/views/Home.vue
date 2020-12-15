<template>
  <div class="home">

    <div class="Introduction">'
      <h1>DeltaSprint</h1>

      <p><strong>Kas tahad sprintida, kuid ei tegele spordiga?</strong></p>

      <p>Ole mureta! Osale DeltaSprint võistlusel, kus pead võitmiseks vaid mõistust kasutama.</p>

      <p>Ülesanded on võimalik lahendada ilma uhkete programmeerimisteadmisteta, seega kui Püüton või Java su emakeel pole, siis päris hätta ei jää.</p>

      <p>Võistlusel saavad osaleda kõik bakalaureuse tudengid ning osalejate piirarvu ei ole!</p>

      <p>Kui oled huvitatud, siis ole sellel lehel 23. jaanuaril.</p>
    </div>
    
    <div class="logos">
      <img src="../assets/arvutiteaduse_instituut_est_valge.png" alt="ATI logo">
      <img src="../assets/matemaatika_ja_statistika_instituut_est_valge.png" alt="MSI logo">
      <strong>Üritust korraldab:</strong>
      <img src="../assets/mits_logo_tekstiga_valge.svg" alt="MITS logo">
    </div>
    

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
p, strong, h1{
  color:white;
}
img {
  width: 30%;
}
div.logos{
  display: flex;
  align-items: flex-end;
}
</style>
