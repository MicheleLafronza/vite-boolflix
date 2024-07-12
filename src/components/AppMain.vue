<script>
// import dei dati store
import { store } from '../store.js';

// import components
import AppCard from './AppCard.vue';
import AppCardTv from './AppCardTv.vue';

// export default
export default {
    name: 'AppMain',
    components: {
        AppCard,
        AppCardTv
    },
    data(){
        return {
            store
        }
    }
}

</script>

<template>

    <main>

        <h2 class="movies-title">Movies</h2>

        <div class="movies">

            

            <AppCard v-if="store.movies.length !==0" v-for="movie in store.movies" :key="movie.id" :info="movie" />

            <div class="no-items" v-else>Non ci sono Film, prova ad effettuare una ricerca</div>

        </div>

        <h2 class="series-title">Serie Tv</h2>

        <div class="series">

            

            <AppCardTv v-if="store.series.length !==0" v-for="serie in store.series" :key="serie.id" :infoTv="serie"  />

            <div v-else class="no-items">Non ci sono SerieTv, prova ad effettuare una ricerca</div>

        </div>

    </main>

    
        
 
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main {
    background-color: $grey;
    min-height: calc(100vh - 80px);
}

.movies-title, .series-title {
    color: $red;
    text-align: center;
    font-size: 2rem;
    padding-top: 20px;
    padding-bottom: 20px;
    text-shadow: 0 0 2px #000; 
    -moz-text-shadow: 0 0 2px #000;
    -webkit-text-shadow: 0 0 2px #000;
}

.movies, .series {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.no-items {
    font-size: 1.4rem;
    margin: 0 auto;
}

</style>