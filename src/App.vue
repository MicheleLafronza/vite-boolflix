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
  }

}

</script>

<template>

  <AppHeader />

  <AppMain />




</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
