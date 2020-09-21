<template>
  <b-container id="projetos-descricao">
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
          name: 'projetosdescricao',
          params: {
            id: projetoEspecifico.title.toLowerCase().replace(/\s/g, '-'),
            title: projetoEspecifico.title
          }
        }"
        class="active"
        >{{ projetoEspecifico.title }}</router-link
      >
    </b-breadcrumb>
    <h3 class="titulo">{{ projetoEspecifico.title }}</h3>
    <b-row>
      <b-col sm="12" class="Descricao">{{ projetoEspecifico.descricao }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ProjetosDescricao",
  computed: {
    projetoEspecifico() {
      return this.$store.getters.projetoEspecifico(this.$route.params.id);
    }
  }
};
</script>

<style></style>
