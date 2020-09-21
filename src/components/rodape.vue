<template>
  <footer id="footer">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="12" md="6" lg="4" class="footer">
          <div class="font-weight-bolder ">Contato:</div>
          <div class="contato-email">
            <font-awesome-icon icon="envelope" class="far fa-1x" />
            <a href="mailto:%20douglas.ferreira@ifrj.edu.br">
              douglas.ferreira@ifrj.edu.br</a
            >
          </div>
          <div class="font-weight-bolder ">Endereço:</div>
          <div>
            <font-awesome-icon icon="map-marker-alt" class="fas fa-1x" /> IFRJ -
            Campus Paracambi (IFRJ-CPar). Laboratório de Instrumentação e
            Simulação Computacional Científicas Aplicadas 28. R. Sebastião de
            Lacerda, S/N - Fábrica, Paracambi - RJ, 26600-000.
          </div>
        </b-col>
        <b-col
          sm="12"
          md="6"
          lg="4"
          id="IFRJ"
          class="align-items-center d-flex footer"
        >
          <a
            href="https://ifrj.edu.br"
            id="logo-img"
            target="_blank"
            class="d-block-md d-none mx-auto"
          >
            <img
              class="rounded"
              :src="require('../assets/logo-ifrj.png')"
              alt="Item"
              height="200px"
            />
          </a>
          <a
            href="https://ifrj.edu.br"
            id="logo-img"
            target="_blank"
            class="d-none-md d-block mx-auto"
          >
            <img
              class="rounded"
              :src="require('../assets/logo-ifrj.png')"
              alt="Item"
              height="170px"
            />
          </a>
        </b-col>
        <b-col md="12" lg="4" class="text-center footer">
          <div class="w-100">
            <b-embed
              frameborder="0"
              style="border:0"
              class="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.8623423314486!2d-43.70712097075841!3d-22.59968866094861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x994f0f7228eb8d%3A0xbbd191aec46227d2!2sLaborat%C3%B3rio%20de%20Instrumenta%C3%A7%C3%A3o%20e%20Simula%C3%A7%C3%A3o%20Computacional!5e0!3m2!1spt-BR!2sbr!4v1599833010790!5m2!1spt-BR!2sbr"
              allowfullscreen
            ></b-embed>
          </div>
        </b-col>
        <b-col cols="12" class="text-center copyright"
          >Copyright &copy; 2016-2020 LISComp. Produzido por
          <a
            href="https://psloliveirajr.github.io/"
            target="_blank"
            class="paulinho"
            >Paulinho</a
          ></b-col
        >
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Rodape"
};
</script>

<style>
a.paulinho {
  color: #007bff !important;
}
#footer {
  padding-right: 8px;
  padding-left: 8px;
}
.footer {
  padding: 0;
  margin-bottom: 10px;
  padding-top: 5px;
}
.copyright {
  border-top: gray solid 1px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.contato-email {
  margin-bottom: 3px;
}
</style>
