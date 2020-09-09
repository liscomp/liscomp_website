<template>
  <div class="container">
    <Integrante
      v-for="integrante in equipe"
      v-bind:key="integrante.nome"
      v-bind:nome="integrante.nome"
      v-bind:contato="integrante.contato"
      v-bind:foto="integrante.foto"
      v-bind:cargo="integrante.cargo"
      v-bind:educacao="integrante.educacao"
      v-bind:pesquisas="integrante.pesquisas"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Integrante from "@/components/integrante.vue";

export default {
  data: function() {
    return {
      equipe: [
        {
          nome: "Paulo S. L. de Oliveira Jr.",
          cargo: "Aluno de Iniciação Científica",
          foto: "psloliveirajr.png",
          contato: {
            email: "paulo.oliveira@ifrj.edu.br",
            lattes: "http://lattes.cnpq.br/9599595617047873"
          },
          educacao: [
            {
              curso: "Graduacão em Física",
              termino: "Expectativa em 2021",
              instituicao: "Universidade Federal Fluminense",
              sigla: "UFF",
              pais: "Brasil"
            },
            {
              curso: "Tec. Mecânica Industrial",
              termino: "2017",
              instituicao:
                "Instituto Federal de Educação Ciência e Tecnologia do Rio de Janeiro",
              sigla: "IFRJ",
              pais: "Brasil"
            }
          ],
          pesquisas: [
            {
              pesquisa: "Estudos de Sistemas Complexos em Redes de Terremotos"
            },
            { pesquisa: "Física Estatística Aplicada à Dinâmica de Crimes" },
            { pesquisa: "Física Estatística Aplicada à Sismologia" },
            { pesquisa: "Modelos Computacionais para Simulações de Terremotos" }
          ]
        },
        {
          nome: "Jennifer R. S. da Conceição",
          cargo: "Aluna de Iniciação Científica",
          foto: "jrsconceicao.png",
          contato: {
            email: "jennifer.@ifrj.edu.br",
            lattes: "http://lattes.cnpq.br/7344849643725280"
          },
          educacao: [
            {
              curso: "Graduacão em Física",
              termino: "Expectativa em 2022",
              instituicao:"Universidade Federal Rural do Rio de Janeiro",
              sigla: "UFRRJ",
              pais: "Brasil"
            },
            {
              curso: "Tec. Mecânica Industrial",
              termino: "2017",
              instituicao:
                "Instituto Federal de Educação Ciência e Tecnologia do Rio de Janeiro",
              sigla: "IFRJ",
              pais: "Brasil"
            }
          ],
          pesquisas: [
            {
              pesquisa: "Estudos de Sistemas Complexos em Redes de Terremotos"
            },
            { pesquisa: "Física Estatística Aplicada à Dinâmica de Crimes" },
            { pesquisa: "Física Estatística Aplicada à Sismologia" },
            { pesquisa: "Modelos Computacionais para Simulações de Terremotos" }
          ]
        }
      ]
    };
  },
  name: "Equipe",
  components: {
    Integrante
  }
};
</script>

<style></style>
