<template>
  <b-row class="parceiro">
    <b-col cols="12" lg="4" class="perfil">
      <div class="profile">
        <img class="avatar avatar-circle" :src="require(`@/assets/${foto}`)" />
        <div class="portrait-title">
          <h4 class="titulo nome">{{ nome }}</h4>
          <h6 class="cargo">{{ cargo }}</h6>
          <h6 class="cargo">{{ faculdade.nome }}</h6>
          <ul class="network-icon" aria-hidden="true">
            <li>
              <a :href="email_completo">
                <font-awesome-icon icon="envelope" class="fas big-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </b-col>
    <b-col cols="12" lg="8" class="about">
      <h5 class="titulo">Parceria</h5>
      <b-row>
        <b-col cols="12" class="text-justify">
          {{ sobre }}
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Parceiro",
  props: ["nome", "cargo", "foto", "email", "faculdade", "sobre"],
  data: function() {
    return {
      email_completo: "mailto:%20" + this.email
    };
  }
};
</script>

<style></style>
