<template>
  <b-container>
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link :to="{ name: 'producao' }">Produção Científica</router-link>
      <span class="divisoria">></span>
      <router-link
        :to="
          '/producao/resumo/' +
            artigoEspecifico.properties.title.toLowerCase().replace(/\s/g, '-')
        "
        class="active"
      >
        {{ artigoEspecifico.properties.title }}
      </router-link>
    </b-breadcrumb>
    <div class="sessao">
      {{ artigoEspecifico.properties.title }}
    </div>
    <b-row>
      <b-col sm="12" md="8">
        <p class="resume-title">Resumo</p>
        <div class="text-justify">
          {{ artigoEspecifico.properties.abstract }}
        </div>
      </b-col>
      <b-col sm="12" md="4">
        <div class="info">
          <div class="info-items">
            <div class="info-items-title">Autores</div>
            <div>{{ artigoEspecifico.properties.author }}</div>
          </div>
          <div class="info-items">
            <div class="info-items-title">Data da Publicação</div>
            <div>{{ artigoEspecifico.properties.date }}</div>
          </div>
          <div class="info-items">
            <div class="info-items-title">Revista</div>
            <div>{{ artigoEspecifico.properties.journal }}</div>
          </div>
          <div class="info-items last-line">
            <div class="info-items-title">Tópico</div>
            <div>
              <router-link
                :to="'/producao/' + artigoEspecifico.properties.topic"
                >{{ artigoEspecifico.properties.topic }}</router-link
              >
            </div>
          </div>
        </div>
        <div class="info">
          <div class="info-items last-line">
            <div class="info-items-title">Links</div>
            <a
              :href="artigoEspecifico.properties.url"
              class="info-link"
              target="_blank"
              ><font-awesome-icon icon="external-link-alt" class="fas  fa-1x" />
              Site da revista</a
            >
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="about-us">Últimas publicações</div>
    <b-row class="article-last">
      <Artigolast
        v-for="artigo in artigosOrdenados.slice(0, 3)"
        v-bind:key="artigo.label"
        v-bind:label="artigo.label"
        v-bind:propriedades="artigo.properties"
      />
    </b-row>
  </b-container>
</template>

<script>
import Artigolast from "@/components/artigolast.vue";

export default {
  name: "ProducaoResumo",
  computed: {
    artigoEspecifico() {
      return this.$store.getters.artigoEspecifico(this.$route.params.id);
    },
    artigosOrdenados() {
      return this.$store.getters.artigosOrdenados;
    }
  },
  components: {
    Artigolast
  }
};
</script>

<style>
.resume-title {
  font-size: 1.5em;
  font-weight: 700;
  border-bottom: 2px solid black;
  margin-bottom: 30px;
}
.info {
  background-color: #f8f8f8;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
  margin-bottom: 15px;
}
.info-items {
  border-bottom: 1px solid #e1e1e1;
  padding: 10px 0px 0px 10px;
}
.info-items div {
  margin-bottom: 7px;
}
.last-line {
  border-style: none;
}
.info-items .info-items-title {
  font-size: 1.2em;
  font-weight: 700;
}
.article-last-image {
  width: 100%;
  height: 110px;
  margin-bottom: 10px;
}
.article-last-title {
  font-weight: 700;
  font-size: 1.1em;
}
.article-last-journal {
  font-weight: 300;
  color: #8f8f8f;
}
.article-last {
  margin-bottom: 30px;
}
.about-us {
  margin-top: 50px;
  font-weight: 700px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
  font-size: 1.5em;
  padding-left: 7px;
}
</style>
