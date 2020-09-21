<template>
  <div class="col-12 col-lg-4 aluno">
    <div class="profile">
      <img
        class="avatar avatar-circle"
        v-bind:src="require(`@/assets/${foto}`)"
      />
      <div class="portrait-title">
        <h4 class="titulo nome">{{ nome }}</h4>
        <h6 class="cargo">{{ cargo }}</h6>
        <h6 class="cargo">{{ faculdade }}</h6>
        <ul class="network-icon" aria-hidden="true">
          <li>
            <a :href="email_completo">
              <font-awesome-icon icon="envelope" class="fas big-icon" />
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
  </div>
</template>

<script>
export default {
  name: "Aluno",
  props: ["nome", "cargo", "foto", "contato", "faculdade"],
  data: function() {
    return {
      email_completo: "mailto:%20" + this.contato.email
    };
  }
};
</script>

<style></style>
