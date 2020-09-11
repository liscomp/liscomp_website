<template>
  <header>
    <b-navbar toggleable="lg" id="navbar-main" class=" justify-content-center">
      <b-container fluid class="flex-wrap">
        <div
          class="align-items-center row flex-grow-1 flex-nowrap justify-content-center"
          id="navbar-header"
        >
          <b-navbar-brand href="/">
            <img
              width="250px"
              class="rounded mx-3 d-none d-md-flex"
              :src="require('../assets/logo_liscomp.png')"
              alt="Item"
            />
            <img
              width="200px"
              class="rounded mx-3 d-md-none d-sm-flex"
              :src="require('../assets/logo_liscomp.png')"
              alt="Item"
            />
          </b-navbar-brand>
          <b-navbar-brand
            class="d-none d-lg-block text-wrap text-center font-weight-bold text-dark"
            href="/"
          >
            Laboratório de Instrumentação e Simulação Computacional
          </b-navbar-brand>

          <b-navbar-toggle target="navbar-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <title>menu</title>
              <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"></path>
            </svg>
          </b-navbar-toggle>
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
            <router-link class="p-2" :to="{ name: 'home' }"> Home</router-link>

            <span class="py-2 d-md-flex d-none">/</span>

            <router-link class="p-2" :to="{ name: 'labmovel' }"
              >Laboratório Móvel</router-link
            >

            <span class="py-2 d-md-flex d-none">/</span>

            <router-link class="p-2" :to="{ name: 'infraestrutura' }"
              >Infraestrutura</router-link
            >

            <span class="py-2 d-md-flex d-none">/</span>

            <router-link class="p-2" :to="{ name: 'prestacaoservico' }"
              >Prestação de Serviços</router-link
            >

            <span class="py-2 d-md-flex d-none">/</span>

            <router-link class="p-2" :to="{ name: 'linhaspesquisa' }"
              >Linhas de Pesquisa</router-link
            >

            <span class="py-2 d-md-flex d-none">/</span>

            <router-link class="p-2" :to="{ name: 'equipe' }"
              >Equipe</router-link
            >

            <span class="py-2 d-md-flex d-none">/</span>

            <router-link class="p-2" :to="{ name: 'producao' }"
              >Produção Científica</router-link
            >

            <span class="py-2 d-md-flex d-none">/</span>

            <router-link class="p-2" :to="{ name: 'projetos' }"
              >Projetos</router-link
            >

            <span class="py-2 d-md-flex d-none">/</span>

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
  font-size: 2.2rem;
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
  font-size: 1.2rem;
  color: #cbd3da !important;
}

ul.navbar-nav a {
  font-size: 1.1rem;
}
</style>
