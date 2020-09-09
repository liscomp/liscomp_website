<template>
  <div id="app" class="text-monospace">
    <header>
      <b-navbar toggleable="md" id="navbar-main">
        <div class="container-fluid flex-wrap">
          <div
            class="align-items-center row flex-grow-1 flex-nowrap justify-content-center"
            id="navbar-header"
          >
            <b-navbar-brand href="/">
              <img
                width="200px"
                class="rounded mx-3"
                src="./assets/logo_liscomp.png"
                alt="Item"
              />
            </b-navbar-brand>
            <b-navbar-brand
              class="d-none d-md-block text-wrap text-center font-weight-bold text-dark"
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
              <router-link class="p-2" to="/">Home</router-link>

              <span class="py-2 d-md-flex d-none">/</span>

              <router-link class="p-2" to="/labmovel"
                >Laboratório Móvel</router-link
              >

              <span class="py-2 d-md-flex d-none">/</span>

              <router-link class="p-2" to="/infraestrutura"
                >Infraestrutura</router-link
              >

              <span class="py-2 d-md-flex d-none">/</span>

              <router-link class="p-2" to="/prestacaoservico"
                >Prestação de Serviços</router-link
              >

              <span class="py-2 d-md-flex d-none">/</span>

              <router-link class="p-2" to="/linhaspesquisa"
                >Linhas de Pesquisa</router-link
              >

              <span class="py-2 d-md-flex d-none">/</span>

              <router-link class="p-2" to="/equipe">Equipe</router-link>

              <span class="py-2 d-md-flex d-none">/</span>

              <router-link class="p-2" to="/producao"
                >Produção Científica</router-link
              >

              <span class="py-2 d-md-flex d-none">/</span>

              <router-link class="p-2" to="/projetos">Projetos</router-link>

              <span class="py-2 d-md-flex d-none">/</span>

              <router-link class="p-2" to="/parinternacionais"
                >Parcerias Internacionais</router-link
              >
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </header>

    <router-view />

    <footer>
      <div class="container-fluid ">
        <div class="row flex-grow-1 justify-content-center py-4" id="footer">
          <div id="address" class="col-sm-12 col-md-4">
            <span class="font-weight-bolder ">Endereço:</span><br />
            Instituto Federal de Educação Ciência e Tecnologia do Rio de Janeiro
            - Campus Paracambi (IFRJ-CPar)<br />
            Laboratório de Instrumentação e Simulação Computacional 28<br />
            R. Sebastião de Lacerda, S/N - Fábrica <br />
            Paracambi - RJ, 26600-000 <br />
            <hr class="d-md-none" />
          </div>
          <div class="col-sm-12 col-md-4 text-center">
            <div class="container-fluid">
              <div class="map-responsive">
                <b-embed
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC3ig2W0ehB0hCo__VlH5fUg3PiFtOoUAM&q=Polo%20CEDERJ%20Paracambi"
                  allowfullscreen
                ></b-embed>
              </div>
            </div>
            <hr class="d-md-none" />
          </div>
          <div id="IFRJ" class="col-md-4 text-center">
            <a href="index.html" id="logo-img">
              <img
                class="rounded m-3"
                src="./assets/logo-ifrj.png"
                alt="Item"
                width="220px"
              />
            </a>
          </div>
          <hr class="col-md-11" />
          <div class="col-12 text-center">&copy; Copyright LISComp 2020</div>
        </div>
      </div>
    </footer>
  </div>
</template>

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

<script></script>
