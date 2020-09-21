<template>
  <b-container id="projetos">
    <b-breadcrumb>
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'projetos' }"
        >Projetos</router-link
      >
    </b-breadcrumb>
    <h2 class="titulo">
      Projetos
    </h2>
    <b-card-group columns>
      <ProjetoCards
        v-for="projeto in projetos"
        v-bind:key="projeto.title"
        v-bind:title="projeto.title"
        v-bind:foto="projeto.foto"
        v-bind:descricao="projeto.descricao"
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
