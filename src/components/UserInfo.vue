<template>
    <Card>
        <template #content> 
            <i class="pi pi-user"><p><strong> Nimi:</strong> {{ participant.firstname + " " + participant.lastname }}</p></i><br>
            <i class="pi pi-tag"><p><strong> Matrikli nr:</strong> {{ participant.studentcode }}</p></i><br>
            <i class="pi pi-envelope"><p><strong> Email:</strong> {{ participant.email }}</p></i><br>
            <i class="pi pi-window-maximize"><p><strong> Ekraani mõõtmed:</strong> {{ screenSize }}</p></i><br>
            <Divider />
            <video ref="camera" autoplay></video>
        </template>
    </Card>
  
</template>

<script>
import Divider from 'primevue/divider';
import Card from 'primevue/card/sfc';
export default {
    name: "UserInfo",
    components: {
        Card,
        Divider
    },
    props: ["participant"],
    methods: {
        toast: function(error) {
            this.$toast.add({
            severity:'error',
            summary: 'Veateade',
            detail: error.message,
            life: 3000
        });
    }
    },
    data(){
        return { 
            stream: null
        }
    },
    computed: {
        screenSize : () => `${screen.width} x ${screen.height}`
    },
    created: async function() {
        try{
            const constraints = (window.constraints = {
                audio: false,
                video: true
            });

            this.stream = await navigator.mediaDevices.getUserMedia(constraints)
            this.$refs.camera.srcObject = this.stream;
        }
        catch(error){
            this.toast(new Error("Ei õnnestunud tuvastada kaamerapilti!"))
        }
    },
    unmounted: function(){
        if(this.stream) this.stream.getTracks().forEach(function(track) {
            track.stop();
        });
    }

}
</script>

<style scoped>
video {
    width: 100%;
    height: auto;
}
p {
    display: inline;
    font-family: 'Rubik';
}

@media only screen and (max-width: 992px) {
  video {
    max-width: 350px;
  }
}
</style>