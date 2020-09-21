<template>
  <header>
    <b-navbar toggleable="md" id="navbar-main" class=" justify-content-center">
      <b-container fluid class="flex-wrap justify-content-center">
        <div
          class="align-items-center row flex-nowrap justify-content-center"
          id="navbar-header"
        >
          <b-navbar-brand href="/" class="">
            <img
              width="250px"
              class="rounded"
              :src="require('../assets/site-banner-nobg.png')"
              alt="Item"
            />
          </b-navbar-brand>
          <b-navbar-brand
            class="d-none d-lg-block text-wrap text-center font-weight-bolder p-0 m-0"
            href="/"
          >
            Laboratório de Instrumentação e Simulação Computacional Científicas
            Aplicadas
          </b-navbar-brand>

          <b-navbar-toggle
            id="navbarToggle"
            target="navbar-content"
          ></b-navbar-toggle>
        </div>

        <b-collapse
          class="justify-content-md-center row"
          id="navbar-content"
          is-nav
        >
          <b-navbar-nav
            class="flex-wrap justify-content-sm-center"
            id="nav-list"
          >
            <router-link class="p-2" :to="{ name: 'home' }"
              ><font-awesome-icon icon="house-user" class="fas"
            /></router-link>
            <!-- <router-link class="p-2" :to="{ name: 'linhaspesquisa' }"
              >Linhas de Pesquisa</router-link
            > -->

            <router-link class="p-2" :to="{ name: 'equipe' }"
              >Equipe</router-link
            >

            <router-link class="p-2" :to="{ name: 'infraestrutura' }"
              >Infraestrutura</router-link
            >

            <router-link class="p-2" :to="{ name: 'labmovel' }"
              >Laboratório Móvel</router-link
            >

            <!-- <router-link class="p-2" :to="{ name: 'noticias' }"
              >Notícias</router-link
            > -->

            <router-link class="p-2" :to="{ name: 'producao' }"
              >Produção Científica</router-link
            >

            <router-link class="p-2" :to="{ name: 'projetos' }"
              >Projetos</router-link
            >

            <router-link class="p-2" :to="{ name: 'prestacaoservico' }"
              >Prestação de Serviços</router-link
            >

            <router-link class="p-2" :to="{ name: 'parinternacionais' }"
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
.row .navbar-brand {
  font-size: 2.1em;
}
.navbar-toggler {
  position: absolute;
  border-style: none;
  line-height: 0.5;
  padding: 20px;
  top: 50px;
  right: 10px;
}
#navbar-header > button.navbar-toggler.not-collapsed {
  background-color: white;
}

.navbar-collapse {
  padding-top: 0.5rem;
}
ul.navbar-nav a {
  font-size: 1.1em;
  font-weight: 700;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("../assets/menu.png");
}
</style>
