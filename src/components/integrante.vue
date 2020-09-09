<template>
  <div class="row py-5">
    <div class="col-12 col-lg-4">
      <div id="profile">
        <!-- eslint-disable vue/valid-v-bind -->
        <img class="avatar avatar-circle" v-bind:src="foto_completa" />
        <div class="portrait-title">
          <p id="name">{{ nome }}</p>
          <p id="cargo">{{ cargo }}</p>
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
      <div class="row" id="about">
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

#profile {
  text-align: center;
  padding: 30px 0px 30px 0px;
}

#about {
  padding: 30px 10px;
}

#name {
  font-size: 1.5em;
  color: #000000;
  margin: 20px 0 10px 0;
}

#cargo {
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
