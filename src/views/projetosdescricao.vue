<template>
  <b-container class="py-5">
    <b-row>
      <b-col sm="12" class="titulo">{{projetos.nome}}</b-col>
      <b-col sm="12"><hr></b-col>
      <b-col sm="12" class="Descricao">{{projetos.descricao}}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import store from "@/store";
export default {
  name: "ProjetosDescricao",
  data (){
    return {
      identidade:this.$route.params.id
    }
  },
  computed: {
    projetos() {
      return store.projetos.find(projetos => projetos.id === this.identidade);
    }
  }
};
</script>

<style>

</style> 