<template>
  <b-row>
    <b-col sm="12" md="9">
      <Artigo
        v-for="artigo in artigos"
        v-bind:key="artigo.label"
        v-bind:propriedades="artigo.properties"
      />
    </b-col>
    <b-col sm="12" md="3">
      <Filtro v-bind:anos="anosPublicacao" v-bind:topicos="topicosPublicacao" />
    </b-col>
  </b-row>
</template>

<script>
import Artigo from "@/components/artigo.vue";
import Filtro from "@/components/filtro.vue";

export default {
  name: "Producaoconteudo",
  props: ["artigos", "anosPublicacao", "topicosPublicacao"],
  components: {
    Artigo,
    Filtro
  }
};
</script>

<style></style>
