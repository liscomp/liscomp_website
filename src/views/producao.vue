<template>
  <b-container class="my-5" v-if="nao_vazio_ano">
    <div class="sessao">Artigos: {{ this.$route.params.id }}</div>
    <Producaoconteudo
      :artigos="artigosAno"
      :anosPublicacao="anosPublicacao"
      :topicosPublicacao="topicosPublicacao"
    />
  </b-container>

  <b-container class="my-5" v-else-if="nao_vazio_topico">
    <div class="sessao">Artigos: {{ this.$route.params.id }}</div>
    <Producaoconteudo
      :artigos="artigosTopico"
      :anosPublicacao="anosPublicacao"
      :topicosPublicacao="topicosPublicacao"
    />
  </b-container>

  <b-container class="my-5" v-else>
    <div class="sessao">
      Artigos
    </div>
    <Producaoconteudo
      :artigos="artigosOrdenados"
      :anosPublicacao="anosPublicacao"
      :topicosPublicacao="topicosPublicacao"
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
    topicosPublicacao() {
      return this.$store.getters.pegarTopicos;
    },
    artigosAno() {
      return this.$store.getters.artigosAnos(this.$route.params.id);
    },
    artigosTopico() {
      return this.$store.getters.artigosTopico(this.$route.params.id);
    },
    nao_vazio_ano: function() {
      if (this.artigosAno.length != 0) {
        return true;
      } else {
        return false;
      }
    },
    nao_vazio_topico: function() {
      if (this.artigosTopico.length != 0) {
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
