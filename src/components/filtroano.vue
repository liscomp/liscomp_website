<template>
  <div class="filtro-item">
    <router-link :to="'/producao/' + ano">{{ ano }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Filtroano",
  props: ["ano"]
};
</script>

<style></style>
