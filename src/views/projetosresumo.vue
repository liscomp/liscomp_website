<template>
  <b-container id="projeto-resumo">
    <b-breadcrumb>
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link :to="{ name: 'projetos' }">Projetos</router-link>
      <span class="divisoria">></span>
      <router-link
        :to="{
          name: 'projetosresumo',
          params: {
            id: projetoEspecifico.title.toLowerCase().replace(/\s/g, '-'),
            title: projetoEspecifico.title
          }
        }"
        class="active"
      >
        {{ projetoEspecifico.short_title }}
      </router-link>
    </b-breadcrumb>
    <h2 class="titulo">
      {{ projetoEspecifico.title }}
    </h2>
    <b-row>
      <b-col sm="12" md="8">
        <b-row>
          <b-col sm="12" class="p-0"></b-col>
          <b-col sm="12" class="resumo">
            <h4 class="titulo">Resumo</h4>
            <div class="text-justify">
              {{ projetoEspecifico.resumo }}
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="info-quadro" sm="12" md="4">
        <div class="info">
          <div class="info-items">
            <h5 class="titulo nome">Autores</h5>
            <div>{{ projetoEspecifico.autores }}</div>
          </div>
          <div class="info-items">
            <h5 class="titulo nome">Financiadores</h5>
            <div>{{ projetoEspecifico.financiadores }}</div>
          </div>
          <div class="info-items ">
            <h5 class="titulo nome">Edital</h5>
            <div>{{ projetoEspecifico.edital }}</div>
          </div>
          <div class="info-items last-line">
            <h5 class="titulo nome">Período de Execução</h5>
            <div>{{ projetoEspecifico.periodo }}</div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ProjetosResumo",
  computed: {
    projetoEspecifico() {
      return this.$store.getters.projetoEspecifico(this.$route.params.id);
    }
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
.resumo {
  margin-bottom: 20px;
}
.info-low {
  background-color: #f8f8f8;
  padding: 15px;
  margin-bottom: 15px;
}
.info-quadro {
  margin-top: 26px;
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
