import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/usuarios",
    name: "Usuarios",
    component: () => import("../components/UsuarioList.vue"),
  },
  {
    path: "/create",
    name: "UsuarioCreate",
    component: () => import("../components/UsuarioCreate.vue"),
  },
  {
    path: "/:id",
    name: "UsuarioEdit",
    component: () => import("../components/UsuarioEdit.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
