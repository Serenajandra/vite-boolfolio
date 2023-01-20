import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
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
        }
    ]
});
export {
    router
};