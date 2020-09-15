<template>
  <b-row class="mb-5">
    <b-col sm="3" class="mb-3">
      <div class="preview-image" />
    </b-col>
    <b-col sm="9">
      <div class="article-title">{{ propriedades.title }}</div>
      <div class="article-autores">{{ propriedades.author }}.</div>
      <div>{{ propriedades.journal }}, {{ propriedades.year }}.</div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Artigo",
  props: ["propriedades"]
  /* data: function() {
    return {};
  } */
};
</script>

<style></style>
