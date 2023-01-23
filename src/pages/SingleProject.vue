<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProject',
    data(){
        return{
            store,
            project: {}
        }
    },
    created(){
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiBaseUrl}/api/projects/${slug}`).then(resp => {
            if (resp.data.success) {
                this.project = resp.data.project;
            }else{
                this.$router.push({name: "not-found"});
            }
        }); 
    },
    computed: {
        type() {
            return this.project.type ? project.type : 'nessun tipologia specificata';
        },
        technologie() {
            return this.project.technologie ? project.technologie : 'nessuna tecnologia specificata';
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h1 class="text-center">{{project.title}}</h1>
            <h4> {{type}}</h4>
            <h5> {{technologie}} </h5>

            <p>{{project.content}}</p>
            <p></p>
        </div>
    </main>
</template>
<style lang="scss"></style>