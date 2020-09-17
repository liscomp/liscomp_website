<template>
  <b-container>
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'equipe' }">Equipe</router-link>
    </b-breadcrumb>
    <div class="sessao">
      Equipe
    </div>
    <div class="posicao">
      Pesquisadores
    </div>
    <Pesquisador
      v-for="professor in pesquisadores"
      v-bind:key="professor.nome"
      v-bind:nome="professor.nome"
      v-bind:contato="professor.contato"
      v-bind:foto="professor.foto"
      v-bind:cargo="professor.cargo"
      v-bind:educacao="professor.educacao"
      v-bind:pesquisas="professor.pesquisas"
    />
    <div class="posicao">
      Alunos de Doutorado
    </div>
    <div class="row">
      <Aluno
        v-for="aluno in alunosDoutorado"
        v-bind:key="aluno.nome"
        v-bind:nome="aluno.nome"
        v-bind:contato="aluno.contato"
        v-bind:foto="aluno.foto"
        v-bind:cargo="aluno.cargo"
        v-bind:faculdade="aluno.faculdade"
      />
    </div>
    <div class="posicao">
      Alunos de Mestrado
    </div>
    <div class="row">
      <Aluno
        v-for="aluno in alunosMestrado"
        v-bind:key="aluno.nome"
        v-bind:nome="aluno.nome"
        v-bind:contato="aluno.contato"
        v-bind:foto="aluno.foto"
        v-bind:cargo="aluno.cargo"
        v-bind:faculdade="aluno.faculdade"
      />
    </div>
    <div class="posicao">
      Alunos de Iniciação Científica
    </div>
    <div class="row">
      <Aluno
        v-for="aluno in alunosInicicao"
        v-bind:key="aluno.nome"
        v-bind:nome="aluno.nome"
        v-bind:contato="aluno.contato"
        v-bind:foto="aluno.foto"
        v-bind:cargo="aluno.cargo"
        v-bind:faculdade="aluno.faculdade"
      />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Pesquisador from "@/components/pesquisador.vue";
import Aluno from "@/components/aluno.vue";

export default {
  name: "Equipe",
  components: {
    Pesquisador,
    Aluno
  },
  computed: {
    pesquisadores() {
      return this.$store.getters.pesquisadoresOrdenados;
    },
    alunosDoutorado() {
      return this.$store.getters.alunosDoutoradoOrdenados;
    },
    alunosMestrado() {
      return this.$store.getters.alunosMestradoOrdenados;
    },
    alunosInicicao() {
      return this.$store.getters.alunosInicicaoOrdenados;
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
  padding-left: 10px;
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

.pesquisador {
  margin-bottom: 50px;
}
.aluno {
  margin-bottom: 50px;
}

.posicao {
  font-size: 2em;
  margin-bottom: 50px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 2px solid black;
  font-weight: 700;
}
.breadcrumb .active {
  color: #6c757d;
}
</style>
