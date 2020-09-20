<template>
  <b-container id="projetos">
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
