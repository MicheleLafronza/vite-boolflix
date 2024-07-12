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
        },
        voteConversion(num){
            var voteStar = (num * 5) / 10;
            return Math.ceil(voteStar)
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
        <img v-if="info.poster_path !== null" :src="getImagePath(`https://image.tmdb.org/t/p/w342${info.poster_path}`)" alt="">
        <span v-else>Nessuna immagine</span>
    </div>

    <!-- lingua originale -->
    <h4 class="language">
        <img v-if="languageFlags.includes(info.original_language)" :src="getImagePath(`../assets/${info.original_language}.png`)" alt="bandiera">
        <img v-else src="../assets/earth.png" alt="">
    </h4>

    <!-- voto medio convertito a 1-5 con v-if per le stelline -->
    <div v-if="voteConversion(info.vote_average) === 0">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>

    <div v-else-if="voteConversion(info.vote_average) === 1">
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>

    <div v-else-if="voteConversion(info.vote_average) === 2">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>

    <div v-else-if="voteConversion(info.vote_average) === 3">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>

    <div v-else-if="voteConversion(info.vote_average) === 4">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>

    <div v-else-if="voteConversion(info.vote_average) === 5">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>


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