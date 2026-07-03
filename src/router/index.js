import { createRouter, createWebHistory } from "vue-router";
import LibraryView from "../pages/LibraryView.vue";
import ArtistView from "../pages/ArtistView.vue";


const routes = [
    { path: "/", component: LibraryView },
    { path: "/artists", component: ArtistView},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;