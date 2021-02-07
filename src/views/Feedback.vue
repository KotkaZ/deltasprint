<template>

    <Accordion :activeIndex="0">
        <AccordionTab>
            <template #header>
                <i class="pi pi-info-circle p-mr-1"></i>
                <span>Üldinfo</span>
            </template>

            <h3>Aitäh osalemast!</h3>
            <p>
                Selleks, et saaksime aimu ürituse formaadist, ülesannete keerukusest ja keskkonna sobivusest, koostasime väikese tagasiside vormi.
                Loodame, et leiate mõne minuti aega, et see ära täita. See ei ole kohustuslik ja ei mõjuta mingil määral teie lõpptulemust.
                Vormi täitmine võtab aega 5 kuni 10 minutit ning on anonüümne. Sellelt lehelt lahkudes enam tagasisidet esitada ei saa.
            </p>
            <br>
            <p>
                Tuletame siinkohal meelde, et kõik salvestused tuleb hoida alles 14 päeva alates tänasest. Võitjatega võetakse ühendust emaili
                teel ning palutakse edastada salvestuste link. Edasi toimub parimate lahenduste kontrollimine ja võitjate kinnitamine. 
                Esialgsed tulemused on nähtaval juba praegu, kuid lõpptulemus võib muutuda vastavalt võistluse statuudile. Parimad osalejad selguvad
                14 päeva jooksul ja need kajastakse DeltaSprindi avalehel ning Mitsi Facebookis.
            </p>

        </AccordionTab>

        <AccordionTab>
            <template #header>
                <i class="pi pi-globe p-mr-1"></i>
                <span> Üritus</span>
            </template>

            <p>Kuidas on teie üldine rahulolu korraldusega?</p>
            <Rating v-model="event.overallRaiting" />
            <br>

            <p>Kui tõenäoline on, et osaleksite veel DeltaSprindil või soovitaksite seda sõbrale?</p>
            <Rating v-model="event.recommendRating" />
            <br>

            <p>Kuidas jäite rahule ürituse formaadiga?</p>
            <Rating v-model="event.formatRating" />

            <Divider />

            <p>Kust te antud üritusest kuulsite?</p>
            <Textarea v-model="event.from" />
            <br>

            <p>Mis läks kehvasti ja mida saaksime parandada?</p>
            <Textarea v-model="event.toChange" />



        </AccordionTab>
        <AccordionTab>
            <template #header>
                <i class="pi pi-chart-bar p-mr-1"></i>
                <span> Ülesanded</span>
            </template>

            <p>Kuidas vastasid ülesanded teie ootustele?</p>
            <Rating v-model="tasks.opinionRaiting" />
            <br>

            <p>Kuidas hindate ülesannete variatsiooni?</p>
            <Rating v-model="tasks.varianceRating" />

            <Divider />

            <p>Milliseid tööriistu/vahendeid te ülesannete lahendamisel kasutasite?</p>
            <Textarea v-model="tasks.toolsUsed" />
            <br>

            <p>Milliseid ülesanded valmistasid raskusi ja miks?</p>
            <Textarea v-model="tasks.hardTasks" />
            <br>

            <p>Milliseid ülesandeid sooviksite tulevikus näha?</p>
            <Textarea v-model="tasks.futureTasks" />

        </AccordionTab>
        <AccordionTab>
            <template #header>
                <i class="pi pi-th-large p-mr-1"></i>
                <span> Kasutajaliides</span>
            </template>

            <p>Kuidas jäite rahule keskkonna visuaalse poolega?</p>
            <Rating v-model="ui.visualRaiting" />
            <br>

            <p>Kui lihtne oli keskkonnas navigeerida? (5 - väga lihtne) </p>
            <Rating v-model="ui.navigationRating" />

            <Divider />

            <p>Mis tehnilisi probleeme teil esines või mis jäi arusaamatuks?</p>
            <Textarea v-model="ui.difficulties" />
            <br>

            <p>Mida saaks täiendada ja mis võimalusi juurde tuua?</p>
            <Textarea v-model="ui.newFeatures" />
            <br>

            <p>Kas eelistaksite antud keskkonda mõnele muule testikeskkonnale, näiteks Moodle? Kui ei, siis miks?</p>
            <Textarea v-model="ui.preferences" />

        </AccordionTab>
    </Accordion>
</template>

<script>
import Accordion from 'primevue/accordion/sfc';
import AccordionTab from 'primevue/accordiontab';
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';
import Divider from 'primevue/divider';

export default {
    name: "Feedback",
    components: {
        Accordion,
        AccordionTab,
        Rating,
        Textarea,
        Divider
    },
    data(){
        return{
            event:{
                competition: this.$route.params.id,
                overallRaiting: 0,
                recommendRating: 0,
                formatRating: 0,
                from: '',
                toChange: ''
            },
            tasks: {
                opinionRaiting: 0,
                varianceRating: 0,
                toolsUsed: '',
                hardTasks: '',
                futureTasks: ''
            },
            ui: {
                visualRaiting: 0,
                navigationRating: 0,
                difficulties: '',
                newFeatures: '',
                preferences: ''
            }
        }
    }

}
</script>

<style>

</style>