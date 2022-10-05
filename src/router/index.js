import { createRouter, createWebHistory } from "vue-router";
import ProvaCss from "../components/views/ProvaCSS.vue";
import ShowPokemon from "../components/views/ShowPokemon.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ShowPokemon,
  },
  {
    path: "/test",
    name: "test",
    component: ProvaCss,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
