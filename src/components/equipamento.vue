<template>
  <div class="overflow-hidden equipamento">
    <b-row class="no-gutters">
      <b-col md="4">
        <img
          :src="require(`@/assets/${foto}`)"
          alt="Image"
          class="rounded-0 equipamento-imagem"
        />
      </b-col>
      <b-col md="8">
        <div class="equipamento-corpo">
          <h4 class="equipamento-nome titulo nome">{{ nome }}</h4>
          <div class="equipamento-descricao">
            {{ descricao }}
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Equipamento",
  props: ["nome", "foto", "descricao"]
};
</script>

<style>
.equipamento {
  border: 2px solid #036365;
}
.equipamento-imagem {
  width: 100%;
  object-fit: cover;
}
.equipamento-corpo {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 10px;
}
</style>
