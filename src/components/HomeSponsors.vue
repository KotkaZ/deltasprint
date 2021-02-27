<template>
  <div class="p-grid p-nogutter p-jc-center">
      <div class="p-col-12 p-sm-4 p-md-3 p-lg-2 side left-side">
        <h1>Ametlikku üritust toetavad</h1>
      </div>
      <div class="p-col-12 p-sm-8 p-md-7 p-lg-4 side right-side">
        <a href="https://www.cs.ut.ee/" target="_blank" class="p-col-12 p-md-6"><img src="../assets/ati-valge.svg" alt="ATI logo"></a>
        <a href="https://www.math.ut.ee/" target="_blank" class="p-col-12 p-md-6"><img src="../assets/mat-stat-valge.svg" alt="MSI logo"></a>
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
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
}


</style>