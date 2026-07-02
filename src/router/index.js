import { createRouter } from "vue-router";
import LibraryView from "../pages/LibraryView.vue";
import ArtistView from "../pages/ArtistView.vue";


const routes = [
    { path: "/", Component: LibraryView },
    { path: "/artists", Component: LibraryView },
];

const router = createRouter({
    history: createRouter(),
    routes
});

export default router;