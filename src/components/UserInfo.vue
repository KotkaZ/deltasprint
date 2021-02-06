<template>
    <div>
        <i class="pi pi-user"><strong> Nimi:</strong> {{ participant.firstname + " " + participant.lastname }}</i><br>
        <i class="pi pi-tag"><strong> Matrikli nr:</strong> {{ participant.studentcode }}</i><br>
        <i class="pi pi-envelope"><strong> Email:</strong> {{ participant.email }}</i><br>
        <i class="pi pi-window-maximize"><strong> Ekraani mõõtmed:</strong> {{ screenSize }}</i><br>
        <Divider />
        <video ref="camera" autoplay></video>
    </div>
  
</template>

<script>
import Divider from 'primevue/divider';
export default {
    name: "UserInfo",
    components: {
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
    created: function() {
        const constraints = (window.constraints = {
            audio: false,
            video: true
        });

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => this.$refs.camera.srcObject = stream)
            .catch(() => this.toast(new Error("Veebilehitseja ei toeta kaamerat!")));
        
    }

}
</script>

<style scoped>
p {
    color: black;
}

div {
    background: #f4f7f8;
    padding: 20px;
    border-radius: 8px;
}

video {
    width: 100%;
    height: auto;
}
</style>