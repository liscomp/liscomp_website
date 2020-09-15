<template>
  <b-container class="my-5">
    <div class="sessao">
      Projetos
    </div>
    <b-card-group columns>
      <ProjetoCards
        v-for="projeto in projetos"
        v-bind:key="projeto.id"
        v-bind:identidade="projeto.id"
        v-bind:nome="projeto.nome"
        v-bind:foto="projeto.foto"
        v-bind:descricao="projeto.descricao"
        v-bind:abstract="projeto.abstract"
      />
    </b-card-group>
  </b-container>
</template>

<script>
import ProjetoCards from "@/components/projetocards.vue";

export default {
  name: "Projetos",
  components: {
    ProjetoCards
  },
  computed: {
    projetos() {
      return this.$store.state.projetos;
    }
  }
};
</script>

<style></style>
