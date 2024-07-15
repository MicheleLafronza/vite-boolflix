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
        },
        blankStars(num){
            var positiveStar = (num * 5) / 10;
            var blank = 5 - Math.ceil(positiveStar);
            return blank 
        }
    }
}

</script>

<template>

<div class="card">

    <div class="card-inner">

        <div class="card-front">
            <!-- copertina -->
            <img v-if="info.poster_path !== null" :src="getImagePath(`https://image.tmdb.org/t/p/w342${info.poster_path}`)" alt="">
            <img v-else src="../assets/no-image.png"></img>
        </div>

        <div class="card-back">

            <!-- titolo del film -->
            <h3 class="inside-elements"><span style="font-weight: 900;">Titolo:</span> {{ info.title }}</h3>

            <!-- titolo originale -->
            <h3 class="inside-elements"><span style="font-weight: 900;">Titolo Originale:</span> {{ info.original_title }}</h3>

            <p class="inside-elements"><span style="font-weight: 900;">Trama:</span> {{ info.overview }}</p>

            <!-- lingua originale -->
            <div class="language inside-elements">
                <span style="font-weight: 900;">Lingua originale: </span>
                <img v-if="languageFlags.includes(info.original_language)" :src="getImagePath(`../assets/${info.original_language}.png`)" alt="bandiera">
                <img v-else src="../assets/earth.png" alt="">
            </div>


            <!-- voto medio convertito 1-5 -->
            <div class="stars inside-elements">

                <span style="font-weight: 900;">Voto:</span>
                <i v-for="n in voteConversion(info.vote_average)" class="fa-solid fa-star"></i>
                <i v-for="n in blankStars(info.vote_average)" class="fa-regular fa-star"></i>

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

            width: 100%;
            height: 100%;
            position: relative;
            z-index: 5;
            transition: all 0.8s;
            img {
                width: 100%;
                display: block;
            }
        } 

        .card-back {
            min-width: 100%;
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

            p {
                font-size: 0.8rem;
            }

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