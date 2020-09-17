<template>
  <b-container>
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'prestacaoservico' }"
        >Prestação de Serviços</router-link
      >
    </b-breadcrumb>
  </b-container>
</template>

<script></script>

<style></style>
