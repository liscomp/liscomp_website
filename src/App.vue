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
/*START HEADER*/
.row .navbar-brand {
  font-size: 28px;
}
.navbar-toggler {
  margin-top: 8px;
  margin-bottom: 8px;
  position: absolute;
  top: 0;
  right: 0;
}
.navbar svg {
  height: 1.5em;
  fill: rgb(0, 0, 0);
}

ul.navbar-nav span {
  color: #cbd3da !important;
}

#footer {
  color: rgb(0, 0, 0);
}

.map-responsive {
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  height: 0;
}
.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

#main-content {
  background-color: #fff;
}
</style>
