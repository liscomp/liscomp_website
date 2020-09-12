<template>
  <b-container class="my-5">
    <div class="sessao">
      Artigos
      <hr />
    </div>
    <Artigo
      v-for="(article, i) in citacoes"
      v-bind:key="article.label"
      v-bind:propriedades="article.properties"
      v-bind:posicao="i + 1"
    />
  </b-container>
</template>

<script>
import Artigo from "@/components/artigo.vue";
import bib from "@/json/bib.json";

export default {
  data: function() {
    return {
      citacoes: bib
    };
  },
  name: "Producao",
  components: {
    Artigo
  }
};
</script>
<style></style>
