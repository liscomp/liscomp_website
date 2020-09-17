<template>
  <b-container>
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'projetos' }"
        >Projetos</router-link
      >
    </b-breadcrumb>
    <b-row>
      <b-col sm="12" class="titulo">{{ projetoEspecifico.nome }}</b-col>
      <b-col sm="12"><hr /></b-col>
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
