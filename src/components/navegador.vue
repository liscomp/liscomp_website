<template>
  <header>
    <b-navbar
      toggleable="md"
      id="navbar-main"
      class=" justify-content-center p-0"
    >
      <b-container fluid class="justify-content-center flex-wrap p-0">
        <div
          class="align-items-center w-100 flex-nowrap justify-content-center d-flex"
          id="navbar-header"
        >
          <b-navbar-brand href="/" class="">
            <img
              width="250px"
              class="logo d-none d-lg-flex"
              :src="require('@/assets/site-banner-nobg.png')"
              alt="banner-liscomp-1"
            />
            <img
              width="450px"
              class="logo d-none d-sm-flex d-lg-none"
              :src="require('@/assets/1800x500-nobg.png')"
              alt="banner-liscomp-2"
            />
            <img
              width="100px"
              class="logo d-flex d-sm-none"
              :src="require('@/assets/icone-liscomp-nobg.png')"
              alt="logo-liscomp"
            />
          </b-navbar-brand>
          <a class="d-none d-lg-block text-center lab-nome" href="/"
            ><h1 class="titulo">
              Laboratório de Instrumentação e Simulação Computacional
              Científicas Aplicadas
            </h1>
          </a>

          <b-navbar-toggle
            id="navbarToggle"
            target="navbar-content"
          ></b-navbar-toggle>
        </div>

        <b-collapse
          class="justify-content-md-center w-100"
          id="navbar-content"
          is-nav
        >
          <b-navbar-nav
            class="flex-wrap justify-content-sm-center"
            id="nav-list"
          >
            <!-- <router-link class="navegador-item" :to="{ name: 'home' }"
              ><font-awesome-icon icon="house-user" class="fas"
            /></router-link> -->
            <!-- <router-link class="navegador-item" :to="{ name: 'linhaspesquisa' }"
              >Linhas de Pesquisa</router-link
            > -->

            <router-link class="navegador-item" :to="{ name: 'equipe' }"
              >Equipe</router-link
            >

            <router-link class="navegador-item" :to="{ name: 'infraestrutura' }"
              >Infraestrutura</router-link
            >

            <router-link class="navegador-item" :to="{ name: 'labmovel' }"
              >Laboratório Móvel</router-link
            >

            <!-- <router-link class="navegador-item" :to="{ name: 'noticias' }"
              >Notícias</router-link
            > -->

            <router-link class="navegador-item" :to="{ name: 'producao' }"
              >Produção Científica</router-link
            >

            <router-link class="navegador-item" :to="{ name: 'projetos' }"
              >Projetos</router-link
            >

            <router-link
              class="navegador-item"
              :to="{ name: 'prestacaoservico' }"
              >Prestação de Serviços</router-link
            >

            <router-link
              class="navegador-item"
              :to="{ name: 'parinternacionais' }"
              >Parcerias Internacionais</router-link
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "Navegador"
};
</script>

<style>
#navbar-main {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}

#navbar-header {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
}

a.lab-nome:hover {
  color: black;
  text-decoration: none;
}
.navbar-toggler {
  position: absolute;
  border-style: none;
  line-height: 0.5;
  margin-left: 10px;
  padding: 20px;
  right: 5px;
}
#navbar-header > button.navbar-toggler.not-collapsed {
  background-color: white;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("../assets/menu.png");
}
a.navegador-item {
  padding: 10px 10px;
  font-size: 20px;
  color: #036365;
}

.navbar-nav a:hover,
.navbar-nav a:focus,
.navbar-nav a.router-link-exact-active {
  color: white;
  background-color: #036365;
  transition: background 500ms;
}
.navbar-collapse {
  background-color: #f4f6f7;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
