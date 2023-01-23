<script>
import axios from 'axios';
import ProjectCard from '../components/partials/ProjectCard.vue';
import { store } from "../store";

export default {
    name: 'HomePage',
 
    data (){
        return {
            store,

            navigation: [
                {
                    label: 'Vai alla lista dei progetti',
                    routeName: 'projectsList',
                    color: 'btn-success'
                },
                {
                    label: 'Scopri di più su di me',
                    routeName: 'aboutMe',
                    color: 'btn-warning'
                },

                {
                    label: 'Scopri anche tu Boolean',
                    routeName: 'boolean',
                    color: 'btn-info'
                }
            ]
        }
    }
}

</script>
<template>
    <div class="container">
        <div class="text-center">
            <h1 class="mt-5">Boolfolio</h1>
            <h5>Di<br>Serena A.M.F.</h5>
        </div>
        <div class="d-flex justify-content-center mt-5 text-center" style="" >
            <h4 class="lh-lg">Tutte le informazioni sui progetti svolti da Serena durante il corso Fullstack Developper di Boolean</h4>
        </div>
        <ul class="nav-bar d-flex justify-content-center mt-5 text-center">
            <li class="nav-item btn mx-4 btn" :class="navLink.color" v-for="(navLink, index) in navigation" :key="index">
                <router-link :to="{ name: navLink.routeName}" class="nav-link" aria-current="page" >{{navLink.label}}</router-link>
            </li>
        </ul>
    </div>
</template>