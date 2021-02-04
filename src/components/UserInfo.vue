<template>
    <div>
        <p><strong>Nimi:</strong> {{ participant.firstname + " " + participant.lastname }}</p>
        <p><strong>Matrikli nr:</strong> {{ participant.studentcode }}</p>
        <p><strong>Email:</strong> {{ participant.email }}</p>
        <p><strong>Ekraani mõõtmed:</strong> {{ screenSize }}</p>
        <video ref="camera" autoplay></video>
    </div>
  
</template>

<script>
export default {
    name: "UserInfo",
    components: {
        
    },
    props: ["participant"],
    methods: {
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
            .catch(() => alert("Veebilehitseja ei toetanud kaamera avamist."));
        
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