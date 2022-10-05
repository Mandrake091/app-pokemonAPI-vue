import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ProvaCSS from "./components/views/ProvaCSS.vue";
import ShowPokemon from "./components/views/ShowPokemon.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",

  routes: [
    { path: "/home", component: ShowPokemon },
    { path: "/test", component: ProvaCSS },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
