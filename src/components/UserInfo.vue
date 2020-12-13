<template>
    <div>
        <p><strong>Nimi:</strong> {{ student.name }}</p>
        <p><strong>Matrikli nr:</strong> {{ student.code }}</p>
        <p><strong>Email:</strong> {{ student.email }}</p>
        <p><strong>Ekraani mõõtmed:</strong> {{ screenSize }}</p>
        <video ref="camera" :width="450" :height="357.5" autoplay></video>
    </div>
  
</template>

<script>
export default {
    name: "UserInfo",
    components: {
        
    },
    props: ["student"],
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
</style>