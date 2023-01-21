import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import ProjectList from "./pages/ProjectList.vue";
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
            path: "/project-list",
            name: "projectList",
            component: ProjectList
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