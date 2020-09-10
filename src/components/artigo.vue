<template>
  <div class="row d-block mb-2">
    [<span class="posicao">{{ posicao }}</span>] {{ propriedades.author }}. {{ propriedades.title }}. {{ propriedades.journal }}, {{ propriedades.year }}.
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

<style>
.posicao{
    font-weight: bold;
}
</style>
