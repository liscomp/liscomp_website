<template>
  <b-container class="my-5">
    <div class="sessao">
      Equipe
      <hr>
    </div>
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
  </b-container>
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

ul.network-icon {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile {
  text-align: center;
}

.about {
  padding: 30px 10px;
}

.name {
  font-size: 1.5em;
  color: #000000;
  margin: 20px 0 10px 0;
}

.cargo {
  color: rgba(0, 0, 0, 0.54);
  margin: 0px 0 10px 0;
}

ul.ul-edu li .description p {
  margin: 0;
}

ul.ul-edu li .description p.institution {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}

.network-icon li {
  margin-right: 10px;
}

.big-icon {
  font-size: 2.5rem;
}
</style>
