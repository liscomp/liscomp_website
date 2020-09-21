<template>
  <div class="noticia">
    <router-link
      :to="{
        name: 'noticiasdescricao',
        params: {
          id: title.toLowerCase().replace(/\s/g, '-'),
          title: title
        },
        hash: '#app'
      }"
    >
      <b-col sm="12">
        <img
          :src="require('@/assets/' + foto)"
          class="noticia-avatar noticia-avatar-cicle"
        />
      </b-col>
      <b-col sm="12">
        <div class="noticia-titulo">{{ title }}</div>
      </b-col>
    </router-link>
    <b-col sm="12"
      ><div class="noticia-data">{{ data }}</div></b-col
    >
  </div>
</template>

<script>
export default {
  name: "noticias",
  props: ["title", "foto", "data"]
};
</script>

<style></style>
