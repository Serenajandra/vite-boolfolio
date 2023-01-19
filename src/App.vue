
<script>

import AppMain from './components/AppMain.vue';

export default {
  name: 'App' ,
  components: {
    AppMain,
  },
  data() {
    return{
    }
  }, 
  created(){
  },
  methods: {
  }
}
</script>

<template>
  <h1>Ciao sono la tua pagina di front office</h1>
<AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>