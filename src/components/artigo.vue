<template>
  <b-row class="mb-5">
    <b-col sm="3" class="mb-3">
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
          class="preview-image"
          :src="require(`@/assets/${propriedades.foto}`)"
        />
      </router-link>
    </b-col>
    <b-col sm="9">
      <router-link
        :to="{
          name: 'producaoresumo',
          params: {
            id: propriedades.title.toLowerCase().replace(/\s/g, '-'),
            title: propriedades.title
          }
        }"
      >
        <div class="article-title">{{ propriedades.title }}</div>
      </router-link>
      <div class="article-autores">{{ propriedades.author }}.</div>
      <div>{{ propriedades.journal }}, {{ propriedades.date }}.</div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Artigo",
  props: ["propriedades", "label"],
  mounted() {
    this.$route.meta.title = this.propriedades.title;
  }
};
</script>

<style></style>
