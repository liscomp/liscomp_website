<template>
  <b-container class="py-5">
    <div class="sessao">
      Equipamentos
    </div>
    <Equipamento
      v-for="equipamento in equipamentos"
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

export default {
  name: "Infraestrutura",
  components: {
    Equipamento
  },
  computed: {
    equipamentos() {
      return this.$store.state.equipamentos;
    }
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
  margin-bottom: 10px;
}

.descricao-text {
  font-size: 1.1em;
}

.equipamento {
  margin-bottom: 50px;
}

.name-equip {
  font-size: 2em;
  margin: 20px 0 10px 0;
}
</style>
