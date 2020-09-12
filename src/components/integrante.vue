<template>
  <div class="row mb-4">
    <div class="col-12 col-lg-4">
      <div class="profile">
        <!-- eslint-disable vue/valid-v-bind -->
        <img class="avatar avatar-circle" v-bind:src="foto_completa" />
        <div class="portrait-title">
          <p class="name">{{ nome }}</p>
          <p class="cargo">{{ cargo }}</p>
        </div>
        <ul class="network-icon" aria-hidden="true">
          <li>
            <a :href="email_completo">
              <font-awesome-icon
                icon="envelope"
                class="fas big-icon"
              ></font-awesome-icon>
            </a>
          </li>
          <li>
            <a :href="contato.lattes" target="_blank" rel="noopener">
              <i class="ai ai-lattes big-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-lg-8">
      <div class="row about">
        <div class="col-md-5 mb-3">
          <h5>Educação</h5>
          <ul id="educacao" class="ul-edu fa-ul">
            <Educacao
              v-for="formacao in formacoes"
              v-bind:key="formacao.curso"
              v-bind:curso="formacao.curso"
              v-bind:termino="formacao.termino"
              v-bind:instituto="formacao.instituicao"
              v-bind:sigla="formacao.sigla"
              v-bind:pais="formacao.pais"
            />
          </ul>
        </div>
        <div class="col-md-7">
          <h5>Linhas de Pesquisa</h5>
          <div class="ul-interests">
            <Pesquisa
              v-for="linha in linhasPesquisa"
              v-bind:key="linha.pesquisa"
              v-bind:linha="linha.pesquisa"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pesquisa from "@/components/pesquisa.vue";
import Educacao from "@/components/educacao.vue";

export default {
  name: "Integrante",
  props: ["nome", "cargo", "foto", "contato", "educacao", "pesquisas"],
  data: function() {
    return {
      linhasPesquisa: this.pesquisas,
      formacoes: this.educacao,
      email_completo: "mailto:%" + this.contato.email,
      foto_completa: require("../assets/" + this.foto)
    };
  },
  components: {
    Pesquisa,
    Educacao
  }
};
</script>

<style>

</style>
