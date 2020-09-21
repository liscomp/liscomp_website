<template>
  <b-col sm="12" md="4" class="mb-3">
    <router-link
      :to="{
        name: 'producaoresumo',
        params: {
          id: propriedades.title.toLowerCase().replace(/\s/g, '-'),
          title: propriedades.title
        }
      }"
    >
      <img
        class="article-last-image"
        :src="require(`@/assets/${propriedades.foto}`)"
      />
    </router-link>
    <b-col sm="12">
      <router-link
        :to="{
          name: 'producaoresumo',
          params: {
            id: propriedades.title.toLowerCase().replace(/\s/g, '-'),
            title: propriedades.title
          }
        }"
      >
        <div class="article-last-title">
          {{ propriedades.title }}
        </div>
      </router-link>
      <a :href="propriedades.url" target="_blank">
        <div class="article-last-journal">
          {{ propriedades.journal }}
        </div>
      </a>
      <div>{{ propriedades.date }}</div>
    </b-col>
  </b-col>
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
