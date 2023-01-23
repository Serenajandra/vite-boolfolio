import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about-me",
            name: "aboutMe",
            component: AboutMe,
        },
        {
            path: "/projects-list",
            name: "projectsList",
            component: ProjectsList
        },
        {
            path: "/projects-list/:slug",
            name: "single-project",
            component: SingleProject
        },
        {
            path: "/boolean",
            name: "boolean",
            component: "boolean"
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
});
export {
    router
};