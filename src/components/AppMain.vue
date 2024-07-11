<script>
// import dei dati store
import { store } from '../store.js';


// import components
import AppCard from './AppCard.vue';

// export default
export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data(){
        return {
            store
        }
    }
}

</script>

<template>
       
<AppCard v-show="store.movieVisible" v-for="movie in store.movies" :key="movie.id" :info="movie" />
 
</template>

<style lang="scss" scoped>

</style>