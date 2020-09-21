<template>
  <div id="producao">
    <b-container v-if="nao_vazio_ano">
      <b-breadcrumb class="p-0">
        <router-link :to="{ name: 'home' }">
          <font-awesome-icon icon="house-user" class="fas" />
          Home
        </router-link>
        <span class="divisoria">></span>
        <router-link :to="{ name: 'producao' }"
          >Produção Científica</router-link
        >
        <span class="divisoria">></span>
        <router-link class="active" :to="'/producao/' + this.$route.params.id">
          {{ this.$route.params.id }}
        </router-link>
      </b-breadcrumb>
      <div class="sessao">Artigos: {{ this.$route.params.id }}</div>
      <Producaoconteudo
        :artigos="artigosAno"
        :anosPublicacao="anosPublicacao"
        :topicosPublicacao="topicosPublicacao"
      />
    </b-container>

    <b-container v-else-if="nao_vazio_topico">
      <b-breadcrumb class="p-0">
        <router-link :to="{ name: 'home' }">
          <font-awesome-icon icon="house-user" class="fas" />
          Home
        </router-link>
        <span class="divisoria">></span>
        <router-link :to="{ name: 'producao' }"
          >Produção Científica</router-link
        >
        <span class="divisoria">></span>
        <router-link class="active" :to="'/producao/' + this.$route.params.id">
          {{ this.$route.params.id }}
        </router-link>
      </b-breadcrumb>
      <div class="sessao">Artigos: {{ this.$route.params.id }}</div>
      <Producaoconteudo
        :artigos="artigosTopico"
        :anosPublicacao="anosPublicacao"
        :topicosPublicacao="topicosPublicacao"
      />
    </b-container>

    <b-container v-else>
      <b-breadcrumb class="p-0">
        <router-link :to="{ name: 'home' }">
          <font-awesome-icon icon="house-user" class="fas" />
          Home
        </router-link>
        <span class="divisoria">></span>
        <router-link class="active" :to="{ name: 'producao' }"
          >Produção Científica</router-link
        >
      </b-breadcrumb>
      <div class="sessao">
        Artigos
      </div>
      <Producaoconteudo
        :artigos="artigosOrdenados"
        :anosPublicacao="anosPublicacao"
        :topicosPublicacao="topicosPublicacao"
      />
    </b-container>
  </div>
</template>

<script>
import Producaoconteudo from "@/components/producaoconteudo.vue";

export default {
  name: "producao",
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
