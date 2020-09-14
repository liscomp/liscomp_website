<template>
  <b-container class="py-5">
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
