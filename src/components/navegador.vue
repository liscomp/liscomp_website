<template>
  <header>
    <b-navbar
      toggleable="xl"
      id="navbar-main"
      class=" justify-content-center p-0"
    >
      <b-container
        fluid
        class="justify-content-center flex-wrap p-0 align-items-end"
      >
        <div
          class="justify-content-center d-flex align-items-end"
          id="navbar-header"
        >
          <b-navbar-brand href="/" class="">
            <img
              width="200px"
              class="logo d-none d-md-flex"
              :src="require('@/assets/site-banner-nobg.png')"
              alt="banner-liscomp-1"
            />
            <img
              height="80px"
              class="logo d-none d-sm-flex d-md-none"
              :src="require('@/assets/1800x500-nobg.png')"
              alt="banner-liscomp-1"
            />
            <img
              height="55px"
              class="logo d-flex d-sm-none"
              :src="require('@/assets/1800x500-nobg.png')"
              alt="banner-liscomp-1"
            />
          </b-navbar-brand>
          <a class="d-none d-md-block text-center lab-nome" href="/"
            ><h1 class="titulo text-left">
              Laboratório de Instrumentação <br />
              e Simulação Computacional <br />
              Científicas Aplicadas
            </h1>
          </a>

          <b-navbar-toggle
            id="navbarToggle"
            target="navbar-content"
            class="align-self-center"
          ></b-navbar-toggle>
        </div>
        <b-collapse
          class="justify-content-md-center "
          id="navbar-content"
          is-nav
        >
          <b-navbar-nav
            class="flex-wrap justify-content-sm-center"
            id="nav-list"
          >
            <router-link class="navegador-item" :to="{ name: 'equipe' }"
              >Equipe</router-link
            >

            <router-link class="navegador-item" :to="{ name: 'infraestrutura' }"
              >Infraestrutura</router-link
            >

            <router-link class="navegador-item" :to="{ name: 'labmovel' }"
              >Laboratório Móvel</router-link
            >

            <router-link class="navegador-item" :to="{ name: 'producao' }"
              >Publicações</router-link
            >

            <router-link class="navegador-item" :to="{ name: 'projetos' }"
              >Projetos</router-link
            >

            <router-link
              class="navegador-item"
              :to="{ name: 'prestacaoservico' }"
              >Serviços</router-link
            >

            <router-link
              class="navegador-item"
              :to="{ name: 'parinternacionais' }"
              >Parcerias</router-link
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
  background-color: whitesmoke;
  min-height: 130px;
}
#navbar-header {
  padding-bottom: 10px;
  padding-right: 20px;
}
.lab-nome {
  min-width: 420px !important;
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
  padding: 10px;
  right: 5px;
}
.navbar-collapse {
  flex-grow: 0;
}
#navbar-header > button.navbar-toggler.not-collapsed {
  background-color: white;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("../assets/menu.png");
}
a.navegador-item {
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 700;
  color: #036365;
  text-transform: uppercase;
  text-align: center;
}
.navbar-nav a:hover,
.navbar-nav a:focus,
.navbar-nav a.router-link-exact-active {
  color: white;
  background-color: #036365;
  transition: background 500ms;
}
</style>
