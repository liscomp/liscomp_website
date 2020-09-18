<template>
  <b-container>
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'noticias' }"
        >Notícias</router-link
      >
    </b-breadcrumb>
    <b-row class="noticia">
      <div class="sessao w-100">Notícias</div>
      <b-col
        sm="12"
        md="6"
        v-for="noticia in noticiasOrdenados.slice(0, 3)"
        v-bind:key="noticia.titulo"
      >
        <Noticiaspainel
          v-bind:titulo="noticia.titulo"
          v-bind:foto="noticia.foto"
          v-bind:data="noticia.data"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Noticiaspainel from "@/components/noticiaspainel.vue";

export default {
  components: {
    Noticiaspainel
  },
  computed: {
    artigosOrdenados() {
      return this.$store.getters.artigosOrdenados;
    },
    noticiasOrdenados() {
      return this.$store.getters.noticiasOrdenados;
    }
  }
};
</script>

<style>
.about-us {
  font-weight: 700px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
  font-size: 1.5em;
  padding-left: 7px;
}
.about-us-text {
  padding-left: 10px;
  padding-right: 10px;
}
.noticia-avatar-circle {
  border-radius: 10%;
}
.noticia-avatar {
  width: 100%;
  height: 250px;
  margin: 0 auto;
  object-fit: cover;
  background-color: gray;
}
.noticia-titulo {
  font-weight: 700;
  font-size: 1.35em;
}
.noticia {
  margin-bottom: 20px;
}
</style>
