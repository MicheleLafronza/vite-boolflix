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

    <div v-show="store.movieVisible" class="movies">

        <h2>Movies</h2>

        <AppCard v-for="movie in store.movies" :key="movie.id" :info="movie" />
    </div>

    <div v-show="store.seriesVisible" class="series">

        <h2>Serie Tv</h2>

        <AppCardTv v-for="serie in store.series"  />

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