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
        v-bind:short_title="projeto.short_title"
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

<style>
@media (min-width: 576px) {
  .card-columns {
    -moz-column-count: 1;
    column-count: 1;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
}
@media (min-width: 768px) {
  .card-columns {
    -moz-column-count: 2;
    column-count: 2;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
}
@media (min-width: 992px) {
  .card-columns {
    -moz-column-count: 23;
    column-count: 3;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
}
</style>
