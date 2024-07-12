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

<div class="card-inner">

    <div class="card-front">
        <!-- copertina -->
        <img v-if="infoTv.poster_path !== null" :src="getImagePath(`https://image.tmdb.org/t/p/w342${infoTv.poster_path}`)" alt="">
        <img v-else src="../assets/generic.png"></img>
    </div>

    <div class="card-back">

        <!-- titolo del film -->
        <h3 class="inside-elements"><span style="font-weight: 900;">Titolo:</span> {{ infoTv.title }}</h3>

        <!-- titolo originale -->
        <h3 class="inside-elements"><span style="font-weight: 900;">Titolo Originale:</span> {{ infoTv.original_title }}</h3>

        <p class="inside-elements"><span style="font-weight: 900;">Trama:</span> {{ infoTv.overview }}</p>

        <!-- lingua originale -->
        <div class="language inside-elements">
            <span style="font-weight: 900;">Lingua originale: </span>
            <img v-if="languageFlags.includes(infoTv.original_language)" :src="getImagePath(`../assets/${infoTv.original_language}.png`)" alt="bandiera">
            <img v-else src="../assets/earth.png" alt="">
        </div>

        <!-- voto medio convertito a 1-5 con v-if v-else if per le stelline -->
        <div v-if="voteConversion(infoTv.vote_average) === 0">
            <span style="font-weight: 900;">Voto:</span>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>

        <div v-else-if="voteConversion(infoTv.vote_average) === 1">
            <span style="font-weight: 900;">Voto: </span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>

        <div v-else-if="voteConversion(infoTv.vote_average) === 2">
            <span style="font-weight: 900;">Voto: </span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>

        <div v-else-if="voteConversion(infoTv.vote_average) === 3">
            <span style="font-weight: 900;">Voto: </span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>

        <div v-else-if="voteConversion(infoTv.vote_average) === 4">
            <span style="font-weight: 900;">Voto: </span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>

        <div v-else-if="voteConversion(infoTv.vote_average) === 5">
            <span style="font-weight: 900;">Voto: </span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>

    </div>

    
</div>

</div>
    
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    margin-top: 10px;
    margin-bottom: 10px;
    flex-basis: calc((100% / 3) - 20px);

    &:hover .card-front {
        display: none;
    }

    .card-inner {

        width: 100%;
        height: 100%;
        border: 1px solid white;
        position: relative;

        .card-front {

            position: relative;
            z-index: 5;
            img {
                width: 100%;
                display: block;
            }
        } 

        .card-back {
            width: 100%;
            height: 100%;
            transition: all 0.8s;
            background-color: $black;
            color: $white;
            z-index: 0;
            position: absolute;
            top: 0;
            padding-top: 30px;
            padding-bottom: 30px;
            padding-left: 10px;
            padding-right: 10px;
            overflow: auto;

            img {
                width: 40px;
            }

            .inside-elements {
                margin-bottom: 10px;
            }
        }

    }
        

}
    


</style>