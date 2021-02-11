<template>
    <Card>
        <template #content> 
            <i class="pi pi-user"><strong> Nimi:</strong> {{ participant.firstname + " " + participant.lastname }}</i><br>
            <i class="pi pi-tag"><strong> Matrikli nr:</strong> {{ participant.studentcode }}</i><br>
            <i class="pi pi-envelope"><strong> Email:</strong> {{ participant.email }}</i><br>
            <i class="pi pi-window-maximize"><strong> Ekraani mõõtmed:</strong> {{ screenSize }}</i><br>
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
    computed: {
        screenSize : () => `${screen.width} x ${screen.height}`
    },
    created: async function() {
        try{
            const constraints = (window.constraints = {
                audio: false,
                video: true
            });

            const stream = await navigator.mediaDevices.getUserMedia(constraints)
            this.$refs.camera.srcObject = stream;
        }
        catch(error){
            this.toast(new Error("Ei õnnestunud tuvastada kaamerapilti!"))
        }
        
    }

}
</script>

<style scoped>
video {
    width: 100%;
    height: auto;
}

@media only screen and (max-width: 992px) {
  video {
    max-width: 350px;
  }
}
</style>