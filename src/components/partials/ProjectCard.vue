<script>
import SingleProject from '../../pages/SingleProject.vue';

export default {
  name: 'ProjectCard',
  props: {
    project: Object
  }
}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title text-center">{{project.title}}</h3>
            <p class="card-text">{{project.presentation}}</p>
            <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-primary">Dettagli</router-link>
        </div>
    </div>
</template>

<style lang="scss"></style>