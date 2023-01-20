
<script>

// import AppMain from './components/AppMain.vue';
import HeaderApp from './components/partials/HeaderApp.vue';

export default {
  name: 'App' ,
  components: {
    // AppMain,
    HeaderApp
},

}
</script>

<template>
  <!-- <h1>Ciao sono la tua pagina di front office</h1> -->
  <HeaderApp />
  <router-view></router-view>
<!-- <AppMain /> -->
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>