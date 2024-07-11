<script>
// import store
import { store } from '../store'

// export default
export default {
    name: 'AppHeader',
    data(){
        return {
            store
        }
    }
}

</script>

<template>

    <header>
        <input type="text" placeholder="Cerca un titolo.." v-model="store.searchText">
        <button @click="$emit('search')">Cerca</button>
    </header>

</template>

<style lang="scss" scoped>

</style>