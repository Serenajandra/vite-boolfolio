<script>
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
            <a class="btn btn-primary"    href="{{}}">Dettagli</a>
        </div>
    </div>
</template>

<style lang="scss"></style>