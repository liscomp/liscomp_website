<template>
  <div>
    <b-card
      :title="title"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <router-link
        :to="{
          name: 'projetosdescricao',
          params: {
            id: title.toLowerCase().replace(/\s/g, '-'),
            title: title
          }
        }"
        tag="button"
        class="button"
        >Mais sobre nosso projeto</router-link
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProjetoCards",
  props: ["title", "foto", "descricao"]
};
</script>

<style>
.button {
  padding: 10px 5px;
  border-radius: 3px;
  background-color: #dadada;
  color: black;
  font-weight: 600;
  border: none;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
  cursor: pointer;
}
.card {
  background-color: #f4f6f7;
  border: 2px solid #036365;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25);
}
button.button {
  padding: 10px 10px;
  font-size: 20px;
  color: #036365;
  background-color: #eee;
}
button.button:hover,
button.button:focus {
  color: white;
  background-color: #036365;
  transition: background 500ms;
}
</style>
