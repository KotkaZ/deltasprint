<template>
  <div>
    <strong>Võistlusest</strong>
    <p>
      DELTASPRINT on võistlus, kus tuleb lahendada erinevaid matemaatika, loogika ja programmeerimisülesandeid.
      Osad ülesanded on lahendatavad mitmel eriviisil, sellisel juhul on lahenduskäik vaba.
      Auhinnafond on 600€, mis jaotatakse esikolmiku vahel. 
    </p>

    <strong>Nõuded:</strong>
    <ul>
      <li>Võistlusel osaleja peab olema Tartu Ülikooli bakalaureuse tudeng.</li>
      <li>Veebikaamera olemasolu ja avatud veebipilt lahendamise ekraanil.</li>
      <li>Ülessannete lahendamise vältel peab ekraanisalvestama vabalt valitud tarkvaraga, soovitatavalt OBSiga.</li>
      <li>Paberile lahendatud ülesandeid tuleb näidata kaamerasse ja hiljem foto/skanneeriguga salvestama.</li>
      <li>Kõik jäädvustused käivad koos ekraanisalvestustega ja neile kehtivad samad reeglid.</li>
      <li>Ekraanisalvestus tuleb hoida alles 10 päeva peale võistluse.</li>
      <li>Esikolmik peab stipendiumi kinnitamiseks esitama ekraanisalvestused.</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
div {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f4f7f8;
  padding: 10px;
  border-radius: 15px;
}
p {
  text-align: center;
  padding: 10px;
}

</style>
