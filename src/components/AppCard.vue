<script>


// export default
export default {
    name: 'AppCard',
    props: {
        info: Object
    }
}

</script>

<template>

<div class="card">

    <!-- titolo del film -->
    <h2>{{ info.title }}</h2>

    <!-- titolo originale -->
    <h3>{{ info.original_title }}</h3>

    <!-- lingua originale -->
    <h4>{{ info.original_language }}</h4>

    <!-- voto medio -->
    <h4>{{ info.vote_average }}</h4>

</div>
    
</template>

<style lang="scss" scoped>

.card {
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>