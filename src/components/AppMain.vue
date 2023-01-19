<script>
import axios from 'axios';
import ProjectCard from './partials/ProjectCard.vue';
export default {
  name: 'AppMain' ,
  components: {
    ProjectCard
},
  data() {
    return{
      projects: [],
    }
  }, 
  created(){
    this.getProjects();
  },
  methods: {
  getProjects(){
    axios.get('http://127.0.0.1:8000/api/projects').then(resp =>{
      this.projects = resp.data.results;
    })
}
  }
}
</script>

<template>
    <div class="">
        <h2 class="text-center">Lista dei progetti</h2>
        <div class="row d-flex justify-content-center">
          <div class="col-10 m-4" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project"/>
          </div>
        </div>
    </div>


</template>

<style lang="scss">

</style>