<template>
  <div>
    <div class="categorias">
      <div class="filtro-titulo">
        Anos
      </div>
      <div
        v-for="ano in anos"
        v-bind:key="ano"
        v-bind:ano="ano"
        class="filtro-item"
      >
        <router-link :to="'/producao/' + ano">{{ ano }}</router-link>
      </div>
    </div>
    <div class="categorias">
      <div class="filtro-titulo">
        Tópicos
      </div>
      <div
        v-for="topico in topicos"
        v-bind:key="topico"
        v-bind:ano="topico"
        class="filtro-item"
      >
        <router-link :to="'/producao/' + topico">{{ topico }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filtro",
  props: ["anos", "topicos"]
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
.categorias {
  margin-bottom: 40px;
}
</style>
