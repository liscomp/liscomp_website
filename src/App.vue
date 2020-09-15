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
#nav-list a.router-link-exact-active {
  color: #cbd3da !important;
}

header,
footer {
  background-color: #ececec;
}

.sessao {
  font-size: 2.5em;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
}

.preview-image {
  height: 175px;
  min-height: 110px;
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 0px 0px, 50% 50%;
  background-size: auto, auto;
  background-repeat: repeat, no-repeat;
}
</style>
