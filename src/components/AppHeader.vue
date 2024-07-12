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
        
        <h1 id="title-page">BOOLFIX</h1>

        <div class="search-box">
            <input @keyup.enter="$emit('search')" type="text" placeholder="Cerca un titolo.." v-model="store.searchText">
            <button @click="$emit('search')">Cerca</button>
        </div>
 
    </header>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

header {
    background-color: $black;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;

    #title-page {
            color: $red;
        }
    
    .search-box {
        height: 35px;

        input {
            height: 30px;
            padding: 10px;

            &:focus{
                outline: none;
            }
            
        }

        

        button {
            background-color: $red;
            border: none;
            height: 30px;
            padding: 5px;
            width: 80px;

            &:hover {
                border: 3px solid $grey;
            }
        }

        
    }
    
    }

</style>