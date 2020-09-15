<template>
  <b-container class="my-5" v-if="nao_vazio">
    <div class="sessao">Artigos: {{ this.$route.params.id }}</div>
    <Producaoconteudo :artigos="artigosAno" :anosPublicacao="anosPublicacao" />
  </b-container>

  <!-- <b-container class="my-5" v-else-if="">
    <div class="sessao">
      Artigos: {{ this.$route.params.id }}
    </div>
    <Producaoconteudo
      :artigos="artigosOrdenados"
      :anosPublicacao="anosPublicacao"
    />
  </b-container> -->

  <b-container class="my-5" v-else>
    <div class="sessao">
      Artigos
    </div>
    <Producaoconteudo
      :artigos="artigosOrdenados"
      :anosPublicacao="anosPublicacao"
    />
  </b-container>
</template>

<script>
import Producaoconteudo from "@/components/producaoconteudo.vue";

export default {
  name: "Producao",
  components: {
    Producaoconteudo
  },
  computed: {
    artigosOrdenados() {
      return this.$store.getters.artigosOrdenados;
    },
    anosPublicacao() {
      return this.$store.getters.pegarAnos;
    },
    artigosAno() {
      return this.$store.getters.artigosAnos(this.$route.params.id);
    },
    nao_vazio: function() {
      if (this.artigosAno.length != 0) {
        return true;
      } else {
        return false;
      }
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
