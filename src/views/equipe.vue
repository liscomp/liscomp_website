<template>
  <div class="container">
    <Integrante
      v-for="integrante in equipe"
      v-bind:key="integrante.nome"
      v-bind:nome="integrante.nome"
      v-bind:contato="integrante.contato"
      v-bind:foto="integrante.foto"
      v-bind:cargo="integrante.cargo"
      v-bind:educacao="integrante.educacao"
      v-bind:pesquisas="integrante.pesquisas"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Integrante from "@/components/integrante.vue";
import equipejson from "@/json/equipe.json";

export default {
  data: function() {
    return {
      equipe: equipejson
    };
  },
  name: "Equipe",
  components: {
    Integrante
  }
};
</script>

<style></style>
