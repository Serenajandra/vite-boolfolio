<script>
import axios from 'axios';
import ProjectCard from '../components/partials/ProjectCard.vue';
import { store } from "../store";

export default {
    name: "ProjectList",
    components: {
    ProjectCard
    },
    data() {
      return{
        store,
        projects: [],
      }
    }, 
      created(){
      this.getProjects();
    },
      methods: {
      getProjects(){
        axios.get(`${this.store.apiBaseUrl}/api/projects`).then(resp =>{
        this.projects = resp.data.results;
      })
    }
  }
}
</script>

<template>
    <h2>Projects page</h2>
     <div class="">
        <h2 class="text-center">Lista dei progetti</h2>
        <div class="row d-flex justify-content-center">
          <div class="col-10 m-4" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project"/>
          </div>
        </div>
    </div>
</template>