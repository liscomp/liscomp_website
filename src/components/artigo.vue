<template>
  <div class="row d-block mb-2 px-3">
    [<span class="pos">{{ posicao }}</span
    >] {{ propriedades.author }}.<span class="article-title">
      {{ propriedades.title }} </span
    >. {{ propriedades.journal }}, {{ propriedades.year }}.
  </div>
</template>

<script>
export default {
  name: "Artigo",
  props: ["propriedades", "posicao"]
  /* data: function() {
    return {};
  } */
};
</script>

<style></style>
