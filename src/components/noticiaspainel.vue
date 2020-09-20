<template>
  <div class="noticia">
    <router-link
      :to="{
        name: 'noticiasdescricao',
        params: { id: titulo.toLowerCase().replace(/\s/g, '-'), title: titulo }
      }"
    >
      <b-col sm="12">
        <img
          :src="require('@/assets/' + foto)"
          class="noticia-avatar noticia-avatar-cicle"
        />
      </b-col>
      <b-col sm="12">
        <div class="noticia-titulo">{{ titulo }}</div>
      </b-col>
      <b-col sm="12"
        ><div class="noticia-data">{{ data }}</div></b-col
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "noticias",
  props: ["titulo", "foto", "data"]
};
</script>

<style></style>
