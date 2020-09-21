<template>
  <li class="mb-2">
    <font-awesome-icon
      icon="graduation-cap"
      class="fa-li fas"
    ></font-awesome-icon>
    <div class="description">
      <h6 class="titulo nome">
        {{ curso_termino }}
      </h6>
      <p class="institution">
        {{ instituto_completo }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "Educacao",
  props: ["curso", "termino", "instituto", "sigla", "pais"],
  data: function() {
    return {
      curso_termino: this.curso + " - " + this.termino,
      instituto_completo: this.instituto + ", " + this.sigla + ", " + this.pais
    };
  }
};
</script>

<style></style>
