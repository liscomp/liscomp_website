<template>
  <footer class="py-3">
    <b-container fluid id="footer" class="d-lg-block d-none">
      <b-row cols="2" class="justify-content-center">
        <b-col sm="9" md="6" lg="3" class="text-center mb-md-4">
          <div class="container-fluid">
            <div class="map-responsive">
              <b-embed
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.0956257799342!2d-43.705751763775076!3d-22.599741912003495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f542531885d7689!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Rio%20de%20Janeiro%20-%20Campus%20Paracambi!5e0!3m2!1spt-BR!2sbr!4v1599720133504!5m2!1spt-BR!2sbr"
                allowfullscreen
              ></b-embed>
            </div>
          </div>
          <hr class="d-md-none" />
        </b-col>
        <b-col sm="9" md="6" lg="3" class="text-center mb-md-4">
          <div class="container-fluid">
            <div class="map-responsive">
              <b-embed
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.0956257799342!2d-43.705751763775076!3d-22.599741912003495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f542531885d7689!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Rio%20de%20Janeiro%20-%20Campus%20Paracambi!5e0!3m2!1spt-BR!2sbr!4v1599720133504!5m2!1spt-BR!2sbr"
                allowfullscreen
              ></b-embed>
            </div>
          </div>
          <hr class="d-block d-md-none col-md-12" />
        </b-col>
        <b-col sm="9" md="6" lg="3">
          <span class="font-weight-bolder ">Contato:</span><br />
          <br />
          <br />
          <span class="font-weight-bolder ">Endereço:</span><br />
          <span
            >IFRJ - Campus Paracambi (IFRJ-CPar). Laboratório de Instrumentação
            e Simulação Computacional 28. R. Sebastião de Lacerda, S/N -
            Fábrica, Paracambi - RJ, 26600-000.</span
          >
          <hr class="d-md-none col-md-12" />
        </b-col>

        <b-col sm="9" md="6" lg="3" id="IFRJ" class="text-center">
          <a
            href="https://ifrj.edu.br"
            id="logo-img"
            target="_blank"
            class="d-block-md d-none"
          >
            <img
              class="rounded m-3 "
              :src="require('../assets/logo-ifrj.png')"
              alt="Item"
              height="200px"
            />
          </a>
          <a
            href="https://ifrj.edu.br"
            id="logo-img"
            target="_blank"
            class="d-none-md d-block"
          >
            <img
              class="rounded m-3 "
              :src="require('../assets/logo-ifrj.png')"
              alt="Item"
              height="170px"
            />
          </a>
          <hr class="col-sm-12 d-md-none" />
        </b-col>
        <hr class="d-none d-md-block col-md-11" />
        <b-col cols="12" class="text-center"
          >&copy; Copyright LISComp 2020</b-col
        >
      </b-row>
    </b-container>

    <b-container fluid id="footer" class="d-lg-none d-block">
      <b-row class="justify-content-center">
        <b-col sm="9" md="6" lg="3" class="text-center mb-md-4">
          <div class="container-fluid">
            <div class="map-responsive">
              <b-embed
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.8623423314486!2d-43.70712097075841!3d-22.59968866094861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x994f0f7228eb8d%3A0xbbd191aec46227d2!2sLaborat%C3%B3rio%20de%20Instrumenta%C3%A7%C3%A3o%20e%20Simula%C3%A7%C3%A3o%20Computacional!5e0!3m2!1spt-BR!2sbr!4v1599833010790!5m2!1spt-BR!2sbr"
                allowfullscreen
              ></b-embed>
            </div>
          </div>
          <hr class="d-md-none" />
        </b-col>
        <b-col sm="9" md="6" lg="3" class="text-center mb-md-4">
          <div class="container-fluid">
            <div class="map-responsive">
              <b-embed
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.7170420476384!2d-43.70693641823545!3d-22.60025984605562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x994f73e0c20393%3A0x9f542531885d7689!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Rio%20de%20Janeiro%20-%20Campus%20Paracambi!5e0!3m2!1spt-BR!2sbr!4v1599831691967!5m2!1spt-BR!2sbr"
                allowfullscreen
              ></b-embed>
            </div>
          </div>
          <hr class="d-block d-md-none col-md-12" />
        </b-col>
      </b-row>
      <hr class="d-none d-md-block col-md-12" />
      <b-row class="justify-content-center">
        <b-col sm="9" md="6" lg="3">
          <span class="font-weight-bolder ">Contato:</span><br />
          <br />
          <br />
          <span class="font-weight-bolder ">Endereço:</span><br />
          <span
            >IFRJ - Campus Paracambi (IFRJ-CPar). Laboratório de Instrumentação
            e Simulação Computacional 28. R. Sebastião de Lacerda, S/N -
            Fábrica, Paracambi - RJ, 26600-000.</span
          >
          <hr class="d-md-none col-md-12" />
        </b-col>

        <b-col sm="9" md="6" lg="3" id="IFRJ" class="text-center">
          <a
            href="https://ifrj.edu.br"
            id="logo-img"
            target="_blank"
            class="d-block-md d-none"
          >
            <img
              class="rounded m-3 "
              :src="require('../assets/logo-ifrj.png')"
              alt="Item"
              height="200px"
            />
          </a>
          <a
            href="https://ifrj.edu.br"
            id="logo-img"
            target="_blank"
            class="d-none-md d-block"
          >
            <img
              class="rounded m-3 "
              :src="require('../assets/logo-ifrj.png')"
              alt="Item"
              height="170px"
            />
          </a>
          <hr class="col-sm-12 d-md-none" />
        </b-col>
        <hr class="d-none d-md-block col-md-11" />
        <b-col cols="12" class="text-center"
          >&copy; Copyright LISComp 2020</b-col
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
.map-responsive {
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  height: 0;
}
.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
#footer {
  color: rgb(0, 0, 0);
}

footer hr {
  box-sizing: border-box;
}
</style>
