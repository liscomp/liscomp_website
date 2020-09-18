<template>
  <b-container>
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link :to="{ name: 'noticias' }">Notícias</router-link>
      <span class="divisoria">></span>
      <router-link
        :to="
          '/noticias/' +
            noticiaEspecifico.titulo.toLowerCase().replace(/\s/g, '-')
        "
        class="active"
      >
        {{ noticiaEspecifico.titulo }}
      </router-link>
    </b-breadcrumb>
    <div class="noticia">
      <b-col sm="12">
        <div class="noticia-descricao-titulo">
          {{ noticiaEspecifico.titulo }}
        </div>
      </b-col>
      <b-col sm="12">
        <img
          :src="require('@/assets/' + noticiaEspecifico.foto)"
          class="noticia-descricao-avatar noticia-descricao-avatar-cicle"
        />
      </b-col>
      <b-col sm="12"
        ><div class="noticia-descricao-data">
          {{ noticiaEspecifico.data }}
        </div></b-col
      >
      <b-col sm="12">
        <component v-bind:is="componentFile"></component>
      </b-col>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Noticiadescricao",
  data: function() {
    return {
      pagina: this.$route.params.id
    };
  },
  computed: {
    noticiaEspecifico() {
      return this.$store.getters.noticiaEspecifico(this.$route.params.id);
    },
    textosArmazenados() {
      return this.$data.textos;
    },
    componentFile() {
      return () => import(`@/components/noticias/${this.$route.params.id}.vue`);
    }
  }
};
</script>

<style>
.about-us {
  font-weight: 700px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
  font-size: 1.5em;
  padding-left: 7px;
}
.about-us-text {
  padding-left: 10px;
  padding-right: 10px;
}
.noticia-descricao-avatar {
  width: 100%;
  height: 600px;
  object-fit: cover;
  background-color: gray;
  margin-bottom: 20px;
}
.noticia-descricao-titulo {
  font-weight: 700;
  font-size: 2.2em;
  margin-bottom: 20px;
}
.noticia {
  margin-bottom: 20px;
}
.noticia-descricao-data {
  font-size: 1.2em;
  margin-bottom: 20px;
}
</style>
