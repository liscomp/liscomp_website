<template>
  <b-container class="my-5">
    <div class="sessao">Artigos: {{ this.$route.params.id }}</div>
    <b-row>
      <b-col sm="12" md="9">
        <Artigo
          v-for="artigo in artigosAno"
          v-bind:key="artigo.label"
          v-bind:propriedades="artigo.properties"
        />
      </b-col>
      <b-col sm="12" md="3">
        <Filtro v-bind:anos="anosPublicao" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Artigo from "@/components/artigo.vue";
import Filtro from "@/components/filtro.vue";

export default {
  name: "Producao",
  components: {
    Artigo,
    Filtro
  },
  computed: {
    artigosOrdenados() {
      return this.$store.getters.artigosOrdenados;
    },
    anosPublicao() {
      return this.$store.getters.pegarAnos;
    },
    artigosAno() {
      return this.$store.getters.artigosAnos(this.$route.params.id);
    }
  }
};
</script>
<style>
.pos,
.article-title {
  font-size: 1.3em;
  font-weight: 700;
}
.article-autores {
  font-weight: 300;
  color: rgb(77, 77, 77);
}
</style>
