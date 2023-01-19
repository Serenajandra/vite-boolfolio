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
        <div class="row">
            <div class="col-10 card m-4" v-for="project in projects" :key="project.id">
                <div class="card-body">
                    <h3 class="card-title text-center">{{project.title}}</h3>
                    <p class="card-text">{{project.presentation}}</p>
                    <a class="btn btn-primary"    href="{{}}">dettagli</a>
                </div>
                <!-- <ProjectCard /> -->
            </div>
        </div>
    </div>


</template>

<style lang="scss">

</style>