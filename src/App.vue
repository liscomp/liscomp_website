<template>
  <div id="app">
    <Navegador />
    <span>
      <router-view />
    </span>
    <Rodape />
  </div>
</template>

<script>
import Navegador from "@/components/navegador";
import Rodape from "@/components/rodape";

export default {
  name: "App",
  components: {
    Navegador,
    Rodape
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
navbar-nav a.router-link-exact-active {
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
</style>
