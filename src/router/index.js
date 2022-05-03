import Vue from "vue";
import VueRouter from "vue-router";
import PortadaView from "../views/PortadaView.vue";
// import SobreMi from "../views/SobreMiView.vue";
// import ContactoView from "../views/ContactoView.vue";

Vue.use(VueRouter);

const routes = [
  {
    // home direccion estatica
    // Path: / es la ruta por defecto es la raiz localhost:8080
    path: "/",
    name: "portada",
    component: PortadaView,
    // redirect,
    // children,
    // alias,
    // beforeEnter,
  },
  {
    path: "/sobremi",
    name: "sobremi",
    alias: ["/sobre-mi", "/sobremi-view", "/about"],
    component: () =>
      import(/* webpackChunkName: "SobreMi" */ "../views/SobreMiView.vue"),
    //component: SobreMi, no carga esta vista cuando se inicia la app, solo cuando la llama lazy louding webpack nombre que aparece en la lista de recursos red
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "Contacto" */ "../views/ContactoView.vue"),
  },
  {
    path: "/user/:usuario",
    name: "usuario",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UsuarioView.vue"),
  },
  {
    // direccion dinamica
    path: "/UltimoPost/:id",
    name: "UltimoPost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // webpackChunkName: "about" no es necesario para que aparezca en la barra de navegacion de red
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UltimoPost.vue"),
  },
  {
    path: "*",
    name: "notfound", // error 404
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes, // short for routes: routes envio de rutas
});

export default router; // exportamos el router utilizable
