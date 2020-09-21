<template>
  <div id="app">
    <go-top
      :size="50"
      :bottom="50"
      :right="10"
      :bg-color="'black'"
      :max-width="10"
    />
    <Navegador />
    <transition name="slide" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
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
  background-color: #ffffff;
}

a {
  color: #028f8f;
}
a:hover {
  color: black;
  text-decoration: none;
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
  color: black !important;
}
ol.breadcrumb a {
  color: #00a1a1 !important;
  font-weight: 700;
}
.titulo {
  font-weight: 700;
  border-bottom: 2px solid #036365;
  padding-left: 15px;
  color: #036365;
}
h1.titulo {
  font-size: 2.5em;
  border-bottom: none;
  margin: 0px;
  padding: 0px;
}
h2.titulo {
  font-size: 2.2em;
  margin-bottom: 40px;
}
h3.titulo {
  font-size: 1.9em;
  margin-bottom: 30px;
}
h4.titulo {
  font-size: 1.6em;
  margin-bottom: 20px;
}
h5.titulo {
  font-size: 1.3em;
  margin-bottom: 15px;
}
h6.titulo {
  font-size: 1em;
  margin-bottom: 10px;
}
.titulo.nome {
  border: none;
  padding-left: 0px;
  margin-bottom: 10px;
}
</style>
