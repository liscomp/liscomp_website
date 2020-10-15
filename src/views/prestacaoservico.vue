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
    <h2 class="titulo">
      Serviços
    </h2>
    <b-row class="panel">
      <b-col sm="7">
        <div class="text-justify">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore VHS.
        </div>
      </b-col>
      <b-col sm="5">
        <img
          class="servico-imagem"
          :src="require(`@/assets/background-image.svg`)"
        />
      </b-col>
    </b-row>
    <b-row class="panel w-75">
      <b-col sm="12" class="panel-heading">
        <h3 class="panel-title titulo">
          <a v-b-toggle href="#servico1"
            >Serviço 1 <font-awesome-icon icon="angle-down" class="fas big-icon"
          /></a>
        </h3>
      </b-col>
      <b-collapse id="servico1" accordion="my-accordion" role="tabpanel">
        <b-col sm="12" class="text-justify">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore VHS.
        </b-col>
      </b-collapse>
    </b-row>
    <b-row class="panel w-75">
      <b-col sm="12" class="panel-heading">
        <h3 class="panel-title titulo">
          <a v-b-toggle href="#servico2"
            >Serviço 2 <font-awesome-icon icon="angle-down" class="fas big-icon"
          /></a>
        </h3>
      </b-col>
      <b-collapse id="servico2" accordion="my-accordion" role="tabpanel">
        <b-col sm="12" class="text-justify">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore VHS.
        </b-col>
      </b-collapse>
    </b-row>
    <b-row class="panel w-75">
      <b-col sm="12" class="panel-heading">
        <h3 class="panel-title titulo">
          <a v-b-toggle href="#servico3"
            >Serviço 3 <font-awesome-icon icon="angle-down" class="fas big-icon"
          /></a>
        </h3>
      </b-col>
      <b-collapse id="servico3" accordion="my-accordion" role="tabpanel">
        <b-col sm="12" class="text-justify">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore VHS.
        </b-col>
      </b-collapse>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.big-icon {
  font-size: 1.5rem;
}
.panel-heading svg {
  float: right;
  transition: all 0.5s;
}
a.not-collapsed svg {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  transform: rotate(180deg);
}
.panel {
  margin-bottom: 30px;
}
.servico-imagem {
  width: 475px;
  height: 300px;
}
</style>
