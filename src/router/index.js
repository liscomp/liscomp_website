/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "LISComp"
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/home.vue")
  },
  {
    path: "/labmovel",
    name: "labmovel",
    meta: {
      title: "Laboratório Móvel"
    },
    component: () =>
      import(/* webpackChunkName: "labmovel" */ "@/views/labmovel.vue")
  },
  {
    path: "/infraestrutura",
    name: "infraestrutura",
    meta: {
      title: "Infraestrutura"
    },
    component: () =>
      import(
        /* webpackChunkName: "infraestrutura" */ "@/views/infraestrutura.vue"
      )
  },
  {
    path: "/prestacaoservico",
    name: "prestacaoservico",
    meta: {
      title: "Prestação de Serviços"
    },
    component: () =>
      import(
        /* webpackChunkName: "prestacaoservico" */ "@/views/prestacaoservico.vue"
      )
  },
  {
    path: "/linhaspesquisa",
    name: "linhaspesquisa",
    meta: {
      title: "LISComp"
    },
    component: () =>
      import(
        /* webpackChunkName: "linhaspesquisa" */ "@/views/linhaspesquisa.vue"
      )
  },
  {
    path: "/equipe",
    name: "equipe",
    meta: {
      title: "Equipe"
    },
    component: () =>
      import(/* webpackChunkName: "equipe" */ "@/views/equipe.vue")
  },
  {
    path: "/producao",
    name: "producao",
    meta: {
      title: "Produções"
    },
    component: () =>
      import(/* webpackChunkName: "producao" */ "@/views/producao.vue")
  },
  {
    path: "/producao/:id",
    name: "producaofiltro",
    component: () =>
      import(/* webpackChunkName: "producao" */ "@/views/producao.vue")
  },
  {
    path: "/producao/resumo/:id",
    name: "producaoresumo",
    component: () =>
      import(/* webpackChunkName: "producao" */ "@/views/producaoresumo.vue")
  },
  {
    path: "/projetos",
    name: "projetos",
    meta: {
      title: "Projetos"
    },
    component: () =>
      import(/* webpackChunkName: "projetos" */ "@/views/projetos.vue"),
      children: [
        
      ]
  },
  {
    path: ":id",
    name: "projetosdescricao",
    component: () =>
      import(/* webpackChunkName: "projetos" */ "@/views/projetosdescricao.vue")
  },
  {
    path: "/parinternacionais",
    name: "parinternacionais",
    meta: {
      title: "Parcerias Internacionais"
    },
    component: () =>
      import(
        /* webpackChunkName: "parinternacionais" */ "@/views/parinternacionais.vue"
      )
  },
  {
    path: "/noticias",
    name: "noticias",
    meta: {
      title: "Notícias"
    },
    component: () =>
      import(
        /* webpackChunkName: "destaques" */ "@/views/noticias.vue"
      )
  },
  {
    path: "/noticias/:id",
    name: "noticiasdescricao",
    component: () =>
      import(
        /* webpackChunkName: "noticiasdescricao" */ "@/views/noticiasdescricao.vue"
      )
  },
  {
    path: "*",
    name: "pagenotfound",
    meta: {
      title: "Página Não Encontra"
    },
    component: () =>
      import(
        /* webpackChunkName: "pagenotfound" */ "@/views/pagenotfound.vue"
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
