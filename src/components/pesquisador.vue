<template>
  <div class="row pesquisador">
    <div class="col-12 col-lg-4">
      <div class="profile">
        <div>
          <img
            class="avatar avatar-circle img-thumbnail"
            v-bind:src="require(`@/assets/${foto}`)"
          />
        </div>
        <div class="portrait-title">
          <p class="name">{{ nome }}</p>
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
        <div class="col-md-5">
          <h5>Formação</h5>
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
          <h5>Experiência</h5>
          <div class="text-justify">
            <span v-for="linha in linhasPesquisa" v-bind:key="linha.pesquisa">
              {{ linha.pesquisa
              }}<span
                v-if="
                  linha.pesquisa ==
                    linhasPesquisa[linhasPesquisa.length - 1].pesquisa
                "
                >.</span
              >
              <span v-else>;</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Educacao from "@/components/educacao.vue";

export default {
  name: "Pesquisador",
  props: ["nome", "foto", "contato", "educacao", "pesquisas"],
  data: function() {
    return {
      linhasPesquisa: this.pesquisas,
      formacoes: this.educacao,
      email_completo: "mailto:%20" + this.contato.email
    };
  },
  components: {
    Educacao
  }
};
</script>

<style></style>
