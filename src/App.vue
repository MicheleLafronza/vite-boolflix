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
      let endPoint = store.UrlAPiMovie+'&query='+store.searchText;

      // richiesta axios
      axios.get(endPoint)
        .then(function (response){
          // console.log(response.data.results);
          store.movies = response.data.results;
          console.log('Questi sono i film dentro l array in store', store.movies);
        })
        .catch(function (error){
          console.log(error);
        })

      // rendiamo visibile la lista dei film solo se l array non è vuoto
      if (store.movies.length !== '') {
        store.movieVisible = true;
      }  else {
        store.movieVisible = false;
      }
    },

    // method che indirizza una richiesta per le serie TV
    getSeries() {
      // aggiungiamo alla base url dell'api per le serie TV, il testo da cercare
      let endPointTV = store.UrlApiTv+'&query='+store.searchText;

      // richiesta axios
      axios.get(endPointTV)
      .then(function (response){
        // console.log('axios tv serie', response.data.results);
        store.series = response.data.results;
        console.log('Queste sono le serie dentro l array in store', console.log(response.data.results));

      })
      .catch(function (error){
        console.log(error);
      })

      // rendiamo visibile la lista delle serie solo se l array non è vuoto
      if (store.UrlApiTv !== '') {
        store.seriesVisible = true;
      } else {
        store.seriesVisible = false;
      }
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
