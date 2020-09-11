<template>
  <footer>
    <b-container fluid id="footer">
      <b-row class="justify-content-center py-4">
        <b-col sm="12" md="4" id="address">
          <span class="font-weight-bolder ">Endereço:</span><br />
          Instituto Federal de Educação Ciência e Tecnologia do Rio de Janeiro -
          Campus Paracambi (IFRJ-CPar)<br />
          Laboratório de Instrumentação e Simulação Computacional 28<br />
          R. Sebastião de Lacerda, S/N - Fábrica <br />
          Paracambi - RJ, 26600-000 <br />
          <hr class="d-md-none" />
        </b-col>
        <b-col sm="12" md="4" class="text-center">
          <div class="container-fluid">
            <div class="map-responsive">
              <b-embed
                width="600"
                height="450"
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.0956257799342!2d-43.705751763775076!3d-22.599741912003495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f542531885d7689!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Rio%20de%20Janeiro%20-%20Campus%20Paracambi!5e0!3m2!1spt-BR!2sbr!4v1599720133504!5m2!1spt-BR!2sbr"
                allowfullscreen
              ></b-embed>
            </div>
          </div>
          <hr class="d-md-none" />
        </b-col>
        <b-col md="4" id="IFRJ" class=" text-center">
          <a href="https://ifrj.edu.br" id="logo-img" target="_blank">
            <img
              class="rounded m-3"
              :src="require('../assets/logo-ifrj.png')"
              alt="Item"
              width="220px"
            />
          </a>
        </b-col>
        <hr class="col-md-11" />
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
#footer {
  color: rgb(0, 0, 0);
}
</style>
