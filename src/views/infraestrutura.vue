<template>
  <b-container class="py-5">
    <div class="sessao">
      Equipamentos
      <hr />
    </div>
    <Equipamento
      v-for="equipamento in equipamentoobjeto"
      v-bind:key="equipamento.nome"
      v-bind:nome="equipamento.nome"
      v-bind:descricao="equipamento.descricao"
      v-bind:foto="equipamento.foto"
    />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Equipamento from "@/components/equipamento.vue";
import equipamentojson from "@/json/equipamento.json";

export default {
  data: function() {
    return {
      equipamentoobjeto: equipamentojson
    };
  },
  name: "Infraestrutura",
  components: {
    Equipamento
  }
};
</script>

<style>
.home-section:first-of-type {
  padding-top: 50px;
}
.avatar-circle {
  border-radius: 10%;
}
.avatar {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  object-fit: cover;
  background-color: gray;
}

.profile {
  text-align: center;
}

.descricao {
  font-size: 1.5em;
  margin: 30px 0px 20px 0px;
}

.descricao-text {
  font-size: 1.1em;
}

.equipamento {
  margin-bottom: 30px;
}

.name-equip {
  font-size: 2em;
  margin: 20px 0 10px 0;
}
</style>
