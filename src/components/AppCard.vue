<script>


// export default
export default {
    name: 'AppCard',
    props: {
        info: Object
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
    <h2>{{ info.title }}</h2>

    <!-- titolo originale -->
    <h3>{{ info.original_title }}</h3>

    <!-- copertina -->
    <div>
        <img :src="getImagePath(`https://image.tmdb.org/t/p/w342${info.poster_path}`)" alt="">
    </div>

    <!-- lingua originale -->
    <h4 class="language">
        <img v-if="languageFlags.includes(info.original_language)" :src="getImagePath(`../assets/${info.original_language}.png`)" alt="bandiera">
        <img v-else src="../assets/earth.png" alt="">
    </h4>

    <!-- voto medio -->
    <h4>{{ info.vote_average }}</h4>

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