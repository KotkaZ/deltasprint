<template>
    <div class="footer p-grid p-jc-center">
        <div class="p-col-12 p-lg-2 p-md-4">
            <h3>Kontakt</h3><br><br>
            <i class="pi pi-user"><p>Karl Rapur</p></i> <br>
            <i class="pi pi-inbox"><p>karl.rapur@ut.ee</p></i> <br>
            <i class="pi pi-phone"><p>55 84 366</p></i> <br>
            <i class="pi pi-github"><a href="https://github.com/KotkaZ" target="_blank">KotkaZ</a></i> <br>
        </div>
        <img class="p-col-12 p-lg-1 p-md-2" src="../assets/mits-ringlogo-valge.svg" alt="Mitsi logo valge">
        <div class="p-col-12 p-lg-4 p-md-6">
            <h3>MTÜ MATEMAATIKA-INFORMAATIKA TUDENGISELTS</h3><br><br>
            <i class="pi pi-facebook"><a href="https://www.facebook.com/MITS.ATI" target="_blank">MAT-INF tudengiselts</a></i><br>
            <i class="pi pi-image"><a href="https://www.instagram.com/ut_mits/" target="_blank">@ut_mits</a></i><br>
            <i class="pi pi-globe"><a href="https://mits.ee/" target="_blank">mits.ee</a></i><br>
            <i class="pi pi-map-marker"><a href="https://goo.gl/maps/9HhqRzAXWa4cd7hY8" target="_blank">Tartu Ülikooli Delta keskus, Narva maantee 18, 51009 Tartu, Eesti
            </a></i><br>
        </div>
        
        <!--pi-facebook--pi-globe--https://github.com/KotkaZ-->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    color: white;
}
p, h3, a {
    text-decoration: none;
    font-family: 'Rubik';
    display:inline;
    line-height: 1.5;
}
a, p {
    padding-left: 10px;
}
div .footer{
    margin: 0;
    background: #151515;
    padding: 10px 20px;
}
img {
    object-fit: contain;
    max-height: auto;
    width: 150px;
}
</style>