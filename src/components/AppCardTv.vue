<script>
    // export default
    export default {
        name: 'AppCardTv',
        props: {
            infoTv: Object
        },
        data(){
        return {
            languageFlags: ['en', 'it', 'fr', 'de', 'es']
            }
        },
        methods: {
            getImagePath: function(imgPath) {
                return new URL(imgPath, import.meta.url).href;
            }
        }
    }

</script>

<template>

<div class="card">

    <!-- titolo del film -->
    <h2>{{ infoTv.name }}</h2>

    <!-- titolo originale -->
    <h3>{{ infoTv.original_name }}</h3>

    <!-- lingua originale -->
    <h4 class="language">
        <img v-if="languageFlags.includes(infoTv.original_language)" :src="getImagePath(`../assets/${infoTv.original_language}.png`)" alt="bandiera">
        <img v-else src="../assets/earth.png" alt="">
    </h4>

    <!-- voto medio -->
    <h4>{{ infoTv.vote_average }}</h4>

</div>
    
</template>

<style lang="scss" scoped>

.card {
    margin-top: 10px;
    margin-bottom: 10px;

    .language img {
        width: 80px;
    }
}

</style>