/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue")
  },
  {
    path: "/labmovel",
    name: "labmovel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "labmovel" */ "../views/labmovel.vue")
  },
  {
    path: "/infraestrutura",
    name: "infraestrutura",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "infraestrutura" */ "../views/infraestrutura.vue"
      )
  },
  {
    path: "/prestacaoservico",
    name: "prestacaoservico",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "prestacaoservico" */ "../views/prestacaoservico.vue"
      )
  },
  {
    path: "/linhaspesquisa",
    name: "linhaspesquisa",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "linhaspesquisa" */ "../views/linhaspesquisa.vue"
      )
  },
  {
    path: "/equipe",
    name: "equipe",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "equipe" */ "../views/equipe.vue")
  },
  {
    path: "/producao",
    name: "producao",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "producao" */ "../views/producao.vue")
  },
  {
    path: "/projetos",
    name: "projetos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projetos" */ "../views/projetos.vue")
  },
  {
    path: "/projetos/:id",
    name: "projetosdescricao",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import( /* webpackChunkName: "projetosdescricao" */ "../views/projetosdescricao.vue")
  },
  {
    path: "/parinternacionais",
    name: "parinternacionais",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "parinternacionais" */ "../views/parinternacionais.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  fallback: true,
  base: process.env.BASE_URL,
  routes
});

export default router;
