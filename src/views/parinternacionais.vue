<template>
  <b-container id="parcerias-internacionais">
    <b-breadcrumb>
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'parinternacionais' }"
        >Parcerias Internacionais</router-link
      >
    </b-breadcrumb>
    <h2 class="titulo">
      Parcerias
    </h2>
    <Parceiro
      v-for="parceiro in parceiros"
      v-bind:key="parceiro.nome"
      v-bind:nome="parceiro.nome"
      v-bind:e_mail="parceiro.e_mail"
      v-bind:foto="parceiro.foto"
      v-bind:cargo="parceiro.cargo"
      v-bind:faculdade="parceiro.faculdade"
      v-bind:sobre="parceiro.sobre"
    />
    <b-row class="logos">
      <b-col
        v-for="faculdade in faculdades"
        v-bind:key="faculdade.sigla"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="align-items-center d-flex footer-item"
      >
        <a
          :href="faculdade.url"
          target="_blank"
          class="d-none-md d-block mx-auto"
        >
          <img
            class="rounded"
            :src="require(`@/assets/logo-${faculdade.sigla}.png`)"
            :alt="faculdade.sigla"
            height="200px"
          />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Parceiro from "@/components/parceiro.vue";
export default {
  name: "Parcerias",
  components: {
    Parceiro
  },
  computed: {
    parceiros() {
      return this.$store.getters.parceriasOrdenados;
    },
    faculdades() {
      return this.$store.getters.pegarfaculdade;
    }
  }
};
</script>

<style>
home-section:first-of-type {
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
.parceiro {
  margin-bottom: 30px;
}
.cargo {
  margin-left: 10px;
}
.logos {
  margin-bottom: 30px;
}
</style>
