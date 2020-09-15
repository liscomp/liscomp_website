<template>
  <!-- eslint-disable vue/valid-v-for -->
  <div>
    <div class="filtro-titulo">
      Anos
    </div>
    <Filtroano v-for="ano in anos" v-bind:key="ano" v-bind:ano="ano" />
  </div>
</template>

<script>
import Filtroano from "@/components/filtroano.vue";

export default {
  name: "Filtro",
  components: {
    Filtroano
  },
  props: ["anos"]
};
</script>

<style>
.filtro-titulo {
  border-bottom: 2px solid black;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 20px;
}
.filtro-item {
  border-bottom: 1px solid rgb(200, 200, 200);
  font-weight: 400;
  margin-bottom: 10px;
  padding-left: 10px;
}
</style>
