<template>
  <b-container id="infraestrutura">
    <b-breadcrumb>
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'infraestrutura' }"
        >Infraestrutura</router-link
      >
    </b-breadcrumb>
    <h2 class="titulo">
      Equipamentos
    </h2>
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
