<template>
  <b-container id="prestacao-de-servicos">
    <b-breadcrumb>
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'prestacaoservico' }"
        >Prestação de Serviços</router-link
      >
    </b-breadcrumb>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info"
          >Accordion 1</b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    };
  }
};
</script>

<style></style>
