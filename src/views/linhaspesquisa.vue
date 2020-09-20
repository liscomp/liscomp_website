<template>
  <b-container class="linhas-de-pesquisa">
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'producao' }"
        >Produção Científica</router-link
      >
    </b-breadcrumb>
  </b-container>
</template>

<script></script>

<style></style>
