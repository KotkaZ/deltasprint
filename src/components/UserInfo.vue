<template>
    <div>
        <p><strong>Nimi:</strong> {{ participant.firstname + " " + participant.lastname }}</p>
        <p><strong>Matrikli nr:</strong> {{ participant.studentcode }}</p>
        <p><strong>Email:</strong> {{ participant.email }}</p>
        <p><strong>Ekraani mõõtmed:</strong> {{ screenSize }}</p>
        <video ref="camera" :width="450" :height="357.5" autoplay></video>
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
    margin: 10px;
    flex-basis: 30%;
    max-width: 500px;
    padding: 10px 20px;
    background: #f4f7f8;
    padding: 20px;
    background: #f4f7f8;
    border-radius: 8px;
}
</style>