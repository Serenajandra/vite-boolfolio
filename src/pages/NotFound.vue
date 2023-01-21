<script>
export default {
    name: 'NotFound',

    methods: {
        goHome() {
            this.$router.push({name: 'home'});
        }
    },
}
</script>
<template>
    <div class="container bg-dark" style="width: 100%; height: 100vh;">
        <h1 class=" pt-5 text-center text-danger">
            Pagina non trovata
        </h1>
        <div class="text-center mt-5">
            <a @click.prevent="goHome()" class="btn btn-light text-center">Torna alla HomePage</a>
    </div>
    </div>
    
</template>