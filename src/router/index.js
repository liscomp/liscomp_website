/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
    path: "/laboratorio-movel",
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
    path: "/prestacao-de-servico",
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
    path: "/producao-cientifica",
    name: "producao",
    meta: {
      title: "Produções"
    },
    component: () =>
      import(/* webpackChunkName: "producao" */ "@/views/producao.vue")
  },
  {
    path: "/producao-cientifica/:id",
    name: "producaofiltro",
    component: () =>
      import(/* webpackChunkName: "producao-filtro" */ "@/views/producao.vue"),
    beforeEnter: (to, from, next) => {
      const artigosTopico = store.state.artigos.find(
        artigos => artigos.properties.topic === to.params.id
      );
      const artigosAno = store.state.artigos.find(
        artigos => artigos.properties.year === to.params.id
      );
      document.title = "Produção - " + to.params.id;
      if (artigosAno || artigosTopico) {
        next();
      } else {
        next({ name: "naoEcontrada" });
      }
    }
  },
  {
    path: "/producao/resumo/:id",
    name: "producaoresumo",
    component: () =>
      import(/* webpackChunkName: "producao" */ "@/views/producaoresumo.vue"),
    beforeEnter: (to, from, next) => {
      const exists = store.state.artigos.find(
        artigos => artigos.properties.title.toLowerCase().replace(/\s/g, "-") === to.params.id
      );
      document.title = exists.properties.title;
      if (exists) {
        next();
      } else {
        next({ name: "naoEcontrada" });
      }
    }
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
    path: "/projetos/:id",
    name: "projetosresumo",
    component: () =>
      import(/* webpackChunkName: "projetos" */ "@/views/projetosresumo.vue"),
    beforeEnter: (to, from, next) => {
      const exists = store.state.projetos.find(
        projetos => projetos.title.toLowerCase().replace(/\s/g, '-') === to.params.id
      );
      document.title = exists.title;
      if (exists) {
        next();
      } else {
        next({ name: "naoEcontrada" });
      }
    }
  },
  {
    path: "/parcerias-internacionais",
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
      ),
    beforeEnter: (to, from, next) => {
      const exists = store.state.noticias.find(
        noticias => noticias.title.toLowerCase().replace(/\s/g, '-') === to.params.id
      );
      document.title = exists.title;
      if (exists) {
        next();
      } else {
        next({ name: "naoEcontrada" });
      }
    }
  },
  {
    path: "*",
    name: "naoEcontrada",
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
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to,from,savedPosition){
    const position = {};
    if (to.hash) {
      position.selector = to.hash;
      position.offset = { y: 100 };
      if (document.querySelector(to.hash)) {
        return position;
      }

      return false;
    }
  },
  routes
});

export default router;
