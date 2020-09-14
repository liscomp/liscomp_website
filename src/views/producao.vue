<template>
  <b-container class="my-5">
    <div class="sessao">
      Artigos
      <hr />
    </div>
    <Artigo
      v-for="(artigo, i) in artigos"
      v-bind:key="artigo.label"
      v-bind:propriedades="artigo.properties"
      v-bind:posicao="i + 1"
    />
  </b-container>
</template>

<script>
import Artigo from "@/components/artigo.vue";

export default {
  name: "Producao",
  components: {
    Artigo
  },
  computed: {
    artigos() {
      return this.$store.state.artigos;
    }
  }
};
</script>
<style>
.pos,
.article-title {
  font-weight: bold;
}
</style>
