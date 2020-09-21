<template>
  <b-container id="pagenotfound">
    <div
      class="pagina-nao-encontrada justify-content-center align-items-center d-flex flex-column"
    >
      <div class="erro text-center w-100">
        Página não encontrada
      </div>
      <div class="mensagem text-center w-100">
        Não conseguimos encontrar essa página. Tente voltar para
        <router-link :to="{ name: 'home' }">
          <font-awesome-icon icon="house-user" class="fas" />
        </router-link>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style>
.pagina-nao-encontrada {
  height: 800px;
}

.erro {
  font-weight: 700;
  font-size: 60px;
  margin-bottom: 30px;
}
.mensagem {
  font-weight: 400;
  font-size: 30px;
}

.mensagem > a.router-link-active {
  color: #007bff !important;
}
</style>
