<template>
  <b-container id="equipe">
    <b-breadcrumb>
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'equipe' }">Equipe</router-link>
    </b-breadcrumb>
    <h2 class="titulo">
      Equipe
    </h2>
    <h3 class="titulo cargo">
      Pesquisadores
    </h3>
    <Pesquisador
      v-for="professor in pesquisadores"
      v-bind:key="professor.nome"
      v-bind:nome="professor.nome"
      v-bind:contato="professor.contato"
      v-bind:foto="professor.foto"
      v-bind:educacao="professor.educacao"
      v-bind:pesquisas="professor.pesquisas"
    />
    <h3 class="titulo cargo">
      Alunos de Doutorado
    </h3>
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
    <h3 class="titulo cargo">
      Alunos de Mestrado
    </h3>
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
    <h3 class="titulo cargo">
      Alunos de Iniciação Científica
    </h3>
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
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  object-fit: cover;
  background-color: gray;
}

h6.cargo {
  color: rgb(0, 0, 0);
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
  margin-bottom: 20px;
}

.about {
  padding-left: 10px;
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

.cargo {
  margin-left: 10px;
}
.breadcrumb .active {
  color: #6c757d;
}
</style>
