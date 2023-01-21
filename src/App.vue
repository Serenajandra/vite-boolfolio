
<script>

import HeaderApp from './components/partials/HeaderApp.vue';

export default {
  name: 'App' ,
  components: {
    HeaderApp
},

}
</script>

<template>
  <HeaderApp />
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>