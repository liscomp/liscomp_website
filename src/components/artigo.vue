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
      <div>
        <span v-if="propriedades.journal">{{ propriedades.journal }},</span>
        <span v-if="propriedades.volume"> v. {{ propriedades.volume }},</span>
        <span v-if="propriedades.pages"> p.{{ propriedades.pages }},</span>
        <span v-if="this.data"> {{ this.data }}.</span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Artigo",
  props: ["propriedades", "label"],
  data() {
    return {
      data:
        this.propriedades.day +
        "/" +
        this.propriedades.month +
        "/" +
        this.propriedades.year
    };
  }
};
</script>

<style></style>
