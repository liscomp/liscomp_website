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
a {
  color: #343a40 !important;
}

a:hover,
a:focus,
#nav-list a.router-link-exact-active {
  color: #cbd3da !important;
}

header,
footer {
  background-color: #ececec;
}

.sessao {
  font-size: 2.5em;
  margin: 0px -15px 40px -15px;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
