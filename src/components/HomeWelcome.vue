<template>
  <div class="p-grid p-nogutter p-jc-center">
    <div class="p-col-12 p-md-6 p-lg-4 side left-side">
        <h1 id="logo">Delta<br><span id="bold">Sprint</span></h1>
    </div>
    <div class="p-col-12 p-md-5 p-lg-5 side right-side p-mt-auto p-mb-auto">
        <p ref="quote"></p>
    </div>
    <div class="p-col-12 p-jc-center p-d-flex p-mt-6">
        <Button id="gobutton" label="Võistlema" class="p-button-outlined" @click="$router.push('competition')"/>
    </div>

    <i id="arrow" class="pi pi-chevron-down"></i>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    name:"HomeWelcome",
    components: {
        Button
    },
    data(){
        return {
            typeWriteTimer: null,
            callBackTimer: null,
            animationTimer: null,
            dataText: [ '“Instead of thinking out the box, get rid of the box.”\n – Deepak Chopra',
            '“It isn’t that they cannot find the solution. It is that they cannot see the problem.”\n – G.K Chesterton',
            '“Every problem is a gift. Without them we wouldn’t grow”\n – Tony Robbins',
            '“All problems become smaller when you confront them instead of dodging them.”\n – William F. Halsey']
        }
    },
    methods: {
        // start a typewriter animation for a text in the dataText array
        StartTextAnimation: function(i) {
            if (!this.dataText[i]) this.animationTimer = setTimeout(() => this.StartTextAnimation(0), 5000);
            else this.typeWriter(this.dataText[i], 0, () => this.StartTextAnimation(i + 1));
        },

        // type one text in the typwriter
        // keeps calling itself until the text is finished
        typeWriter: function(text, i, fnCallback) {
        // chekc if text isn't finished yet
            if (i < text.length) {
                // add next character to h1
                this.$refs.quote.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" \
                style="border-right: .05em solid; animation: caret 1s steps(1) infinite;"></span>';

                // wait for a while and call this function again for next character
                this.typeWriteTimer = setTimeout( () => this.typeWriter(text, i + 1, fnCallback), 100);
            }
            // text finished, call callback if there is a callback function
            else if (fnCallback) this.callBackTimer = setTimeout(fnCallback, 700);
        }
    },
    mounted: function(){
        this.StartTextAnimation(0);
    },
    unmounted: function(){
        if(this.typeWriteTimer) clearTimeout(this.typeWriteTimer);
        if(this.callBackTimer) clearTimeout(this.callBackTimer);
        if(this.animationTimer) clearTimeout(this.animationTimer);
    }
}
</script>

<style scoped>

h1, p{
    font-family: 'Rubik';
    color: white;
    font-size: 2vh;
    white-space: pre-line;
}

#logo{
    font-size: 8vh;
    letter-spacing: 10px;
    font-weight: 100;
    text-transform: uppercase;
}

#bold {
    font-weight: 900;
}

div .side {
    padding: 10px;
}

div .left-side{
    text-align: right;
    padding: 10px;
    border-right: 3px solid #fff;
}
div .right-side{
    text-align: left;
    border-radius: 3px;
    background-color: #1B1B1F80;
    line-height: 1.5;
}


h1 {
    text-shadow: 3px 3px #1B1B1F80;
}

#gobutton{
    font-family: 'Rubik';
    font-size: 2vh;
    background: #1B1B1F80;
    color: #fff;
}

#arrow {
    font-size: x-large;
    bottom: 2%;
    color: white;
    position: absolute;
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

</style>