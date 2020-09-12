<template>
  <b-row class="equipamento">
    <b-col cols="12" lg="5">
      <div class="profile">
        <img
          width="400px"
          height="300px"
          class="equip avatar-circle"
          style="background-color: gray; border-radius: 10%"
          :src="foto_completa"
        />
        <p class="name-equip">{{ nome }}</p>
      </div>
    </b-col>
    <b-col cols="12" lg="7">
      <div class="descricao">Descrição</div>
      <div class="text-justify pl-2 descricao-text">{{ descricao }}</div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Equipamento",
  props: ["nome", "foto", "descricao"],
  data: function() {
    return {
      foto_completa: require("../assets/" + this.foto)
    };
  }
};
</script>

<style></style>
