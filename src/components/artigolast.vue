<template>
  <b-row class="article-last">
    <b-col sm="12" class="mb-3">
      <router-link :to="'/producao/resumo/' + label">
        <img
          class="article-last-image"
          :src="require(`@/assets/${propriedades.foto}`)"
        />
      </router-link>
    </b-col>
    <b-col sm="12">
      <router-link :to="'/producao/resumo/' + label">
        <div class="article-last-title">{{ propriedades.title }}</div>
      </router-link>
      <a :href="propriedades.url" target="_blank">
        <div class="article-last-journal">
          {{ propriedades.journal }}
        </div>
      </a>
      <div>{{ propriedades.date }}</div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Artigolast",
  props: ["propriedades", "label"]
  /* data: function() {
    return {};
  } */
};
</script>

<style></style>
