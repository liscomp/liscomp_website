<template>
  <b-container id="pagenotfound">
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
    </b-breadcrumb>
    <b-row class="pagina-nao-encontrada"> 
      <b-col sm="12">
        404
      </b-col>
      <b-col sm="12">
        Página não encontrada
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style>

</style>