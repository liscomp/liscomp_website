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
</style>
