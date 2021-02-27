<template>
  <div class="p-d-flex p-jc-center">
    <Card class="p-col-12 p-md-8 p-shadow-12">
      <template #title>
      DeltaSprint 2021 Kevad STATUUT
      </template>

      <template #content>
        <ol>
          <li>Võistluse eesmärk on tunnustada parimaid noori loogikuid, kes on kiired ja täpsed ülessannete lahendamisel.</li>

          <li>Võistlus kuulutatakse välja <a class="pi pi-facebook" href="https://www.facebook.com/MITS.ATI" target="_blank">MATEMAATIKA-INFORMAATIKA TUDENGISELTS MTÜ</a> Facebooki kodulehel </li>

          <li>DeltaSprint 2021 Kevad (edaspidi "võistlus") auhinda annavad välja Tartu Ülikooli arvutiteaduse instituut ning Tartu Ülikooli matemaatika ja statistika instituut.</li>

          <li>Võistluse auhinnafond on 600 eurot, mis jaotatakse vastavalt 300€ I, 200€ II ja 100€ III koha eest.
              Lisaks jagatakse loosi teel meeneid kõikide lõpetanute vahel. Auhinnalised kohad eeldavad kõikide ülesannete lahendamist. 
              Komisjon säilitab õiguse teha otsuseid vastavalt oma äranägemisele ja auhinnafondi mahule.</li>

          <li>Võistlusel saab osaleda iga loodus- ja täppisteaduste valdkonna bakalaureuse tudeng.</li>

          <li>Võistlus viiakse läbi <a class="pi pi-globe" href="https://www.deltasprint.ee" target="_blank">DELTASPRINT</a> keskkonnas. Osalejatel on TUNGIV soovitus eelnevalt platvormiga tutvuda osaledes mõnel avalikul katsetusel.</li>

          <li>Võistlusel algab ajavõtt kõikidel osalejatel samaaegselt. Ülesandeid saab lahendada kuni 6 tundi, millal ligipääs suletakse.</li>

          <li>Ülesanded on järgnevatest kategooriatest: matemaatika, programmeerimine, algoritmid, loogika, tõenäosusteooria, krüptograafia, varia.</li>

          <li>Lahenduskäik peab olema vormistatud eesti keeles.</li>

          <li>
            Lahenduse KOHUSTUSLIKUKS osaks on materjalid, mille korrektsuse eest vastutab võistleja ise.
            <ol>
              <li>Materjalide osaks on ekraanisalvestus, mis on teostatud kogu võistluse vältel. Salvestus peab hõlmama kõiki kasutusel olevaid ekraane.
                Kohustuslik osa on veebikaamera pilt, mille tuge pakub lahenduskeskkond. Soovitatav tarkvara on  <a class="pi pi-globe" href="https://obsproject.com/">OBS</a>. Heli pole nõutud.
              </li>
              <li>
                Materjalide alla loetakse kõik failid, mis on suuremad kui 3MB. Lisaks on lubatud lahendada ülesandeid paberil. Sellisel juhul peab
                materjalide hulka kuuluma kvaliteetsed pildid või skanneeringud paberist.
              </li>
              <li>
                Kõik väiksemahulised failid, mis jäävad alla 3MB, saab esitada ülesannete juures eraldi ühe failina.
              </li>
              <li>
                Materjale peab säilitama oma andmekandjal kuni lõplike tulemuste avalikustamiseni.
              </li>
              <li>
                Materjalide päringu teeb komisjon võistleja e-mailile, juhul kui võistleja kandideerib auhinnalisele kohale.
              </li>
            </ol>
          </li>

          <li>Lahenduste materjalide puudumisel võistleja auhinnalisele kohale ei kandideeri ning tema koht pingereas loovutatakse järgmisele osalejale.</li>

          <li>Võistluse tulemused ilmuvad jooksvalt võistluse käigus. Lõplikult kinnitab komisjon tulemused hiljemalt 14 päeva jooksul.</li>

          <li>Lahendusi kontrollib MATEMAATIKA-INFORMAATIKA TUDENGISELTS MTÜ Akadeemilisest töögrupist moodustatud komisjon. Vastuse juures kontrollitakse
          lahenduskäiku, välismaterjalide kasutust ja üldist reeglitele vastavust.</li>

          <li>Kõikide võitjatega võetakse ühendust e-maili teel. Andmete õiguse eest vastutab võistleja ise, hilisemad muudatused ei ole aktsepteeritud.</li>

          <li>Komisjon ei ole kohustatud oma otsust põhjendama ning see ei kuulu edasikaebamisele.
          Komisjonil on õigus jätta auhinnad välja andmata, kui ei ole kvalifitseeruvaid lahendusi või esineb keskkonnaga seotud tehnilisi probleeme.</li>

        </ol>
        </template>

        <template #footer>
          <strong>Kontakt:</strong> Karl Rapur, DeltaSprint korraldaja, karl.rapur@ut.ee, 55 84 366 <br>
          Kerdo Kurs, Akadeemilise töögrupi esimees, kerdo.kurs@ut.ee <br><br>

          <strong>Toetajad:</strong><br><br>
          <div class="p-grid p-jc-center">
            <a href="https://www.cs.ut.ee/" target="_blank" class="p-col-12 p-md-6"><img src="../assets/ati-sinine.svg" alt="ATI logo"></a>
            <a href="https://www.math.ut.ee/" target="_blank" class="p-col-12 p-md-6"><img src="../assets/mat-stat-sinine.svg" alt="MSI logo"></a>
          </div>
        </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card/sfc';
export default {
  name: "Statute",
  components: {
    Card
  }
}
</script>

<style scoped>
* {
  font-size: large;
  text-align: justify;
}
ol {
  counter-reset: item;
}
li {
  display: block;
  margin-top: 15px;
}
li:before {
  content: counters(item, ".") ". ";
  counter-increment: item;
  font-weight: bold;
}
img{ 
  width: 100%;
  height: auto;
}

a{
  text-decoration: none;
}
</style>
