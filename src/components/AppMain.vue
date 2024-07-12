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

    <div class="movies">

        <h2>Movies</h2>

        <AppCard v-if="store.movies.length !==0" v-for="movie in store.movies" :key="movie.id" :info="movie" />
        <div v-else>Non ci sono Film, prova ad effettuare una ricerca</div>

    </div>

    <div class="series">

        <h2>Serie Tv</h2>

        <AppCardTv v-if="store.series.length !==0" v-for="serie in store.series" :key="serie.id" :infoTv="serie"  />
        <div v-else>Non ci sono SerieTv, prova ad effettuare una ricerca</div>

    </div>
        
 
</template>

<style lang="scss" scoped>
.movies h2 {
    text-align: center;
}

.series h2 {
    text-align: center;
}
</style>