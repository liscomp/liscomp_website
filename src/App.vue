<template>
  <div id="app">
    <go-top :size="50" :bottom="50" :bg-color="'black'" />
    <Navegador />
    <div id="conteudo">
      <router-view />
    </div>
    <Rodape />
  </div>
</template>

<script>
import Navegador from "@/components/navegador";
import Rodape from "@/components/rodape";
import GoTop from "@inotom/vue-go-top";

export default {
  name: "App",
  components: {
    Navegador,
    Rodape,
    GoTop
  }
};
</script>
<style>
body {
  color: black;
}

a {
  color: #343a40 !important;
}

a:hover,
a:focus,
.navbar-nav a.router-link-exact-active {
  color: #cbd3da !important;
  text-decoration: none;
}

header,
footer {
  background-color: #ececec;
}

.sessao {
  font-size: 2.5em;
  border-bottom: 2px solid black;
  font-weight: 700;
  margin-bottom: 50px;
}
.preview-image {
  width: 100%;
  height: 175px;
  min-height: 110px;
}

ol.breadcrumb {
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: #ffffff;
}

ol.breadcrumb .divisoria {
  margin-right: 5px;
  margin-left: 5px;
}
ol.breadcrumb a.active {
  color: #6c757d !important;
}
ol.breadcrumb a {
  color: #1f442f !important;
  font-weight: 700;
}
</style>
