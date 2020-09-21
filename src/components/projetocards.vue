<template>
  <div>
    <b-card
      :title="titulo"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        {{ abstract }}
      </b-card-text>
      <router-link
        :to="{
          name: 'projetosdescricao',
          params: {
            id: titulo.toLowerCase().replace(/\s/g, '-'),
            title: titulo
          }
        }"
        >Mais sobre nosso projeto</router-link
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProjetoCards",
  props: ["titulo", "foto", "abstract", "descricao"]
};
</script>

<style></style>
