<script >
// import store
import { store } from './store.js'

// import axios
import axios from 'axios';



// import components
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// export default
export default {
  name: 'App',
  components : {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // method per che indirizza una richiesta per i film
    getMovie() {
      // aggiungiamo alla base url dell'api il query con il testo da cercare
      let endPoint = store.UrlAPiMovie+'&query='+store.searchText+'&language=it-IT';

      // richiesta axios
      axios.get(endPoint)
        .then(function (response){
          store.movies = response.data.results;
          console.log('Questi sono i film dentro l array in store', store.movies);
        })
        .catch(function (error){
          console.log(error);
        })

    },

    // method che indirizza una richiesta per le serie TV
    getSeries() {
      // aggiungiamo alla base url dell'api per le serie TV, il testo da cercare
      let endPointTV = store.UrlApiTv+'&query='+store.searchText+'&language=it-IT';

      // richiesta axios
      axios.get(endPointTV)
      .then(function (response){
        store.series = response.data.results;
        console.log('Queste sono le serie dentro l array in store', store.series);

      })
      .catch(function (error){
        console.log(error);
      })
    }
  }

}

</script>

<template>

  <AppHeader @search="getMovie(), getSeries()" />

  <AppMain />

</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
