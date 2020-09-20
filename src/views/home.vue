<template>
  <div id="home">
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Blank Image"
        img-src="https://picsum.photos/1024/480/?image=52"
        img-alt="Blank image"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Blank Image"
        img-src="https://picsum.photos/1024/480/?image=52"
        img-alt="Blank image"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    <b-container>
      <b-row class="home">
        <b-col sm="12" md="7">
          <div class="about-us">Quem somos</div>
          <div class="text-justify about-us-text">
            <p>
              O Laboratório de Instrumentação e Simulação Computacional
              Científicas Aplicadas possui natureza fortemente multidisciplinar
              em sua composição, formação e atuação, utilizando técnicas de
              instrumentação em conjunto com métodos de simulação e modelagem
              computacional para a realização de pesquisas científicas em
              ciências puras e aplicadas. O LISComp atua principalmente nos
              temas de: física nuclear aplicada à arqueometria, física
              estatística aplicada à sistemas críticos, estudos de redes
              complexas, radiações ionizantes, microscopia ótica e eletrónica,
              estudos de análise de falhas e ciências dos materiais.
            </p>
          </div>
        </b-col>
        <b-col sm="12" md="5">
          <b-row class="noticia">
            <div class="about-us w-100">Notícias</div>
            <Noticiaspainel
              v-for="noticia in noticiasOrdenados.slice(0, 3)"
              v-bind:key="noticia.titulo"
              v-bind:titulo="noticia.titulo"
              v-bind:foto="noticia.foto"
              v-bind:data="noticia.data"
            />
            <router-link :to="'/noticias'" class="w-100 ver-mais">
              Ver mais</router-link
            >
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Noticiaspainel from "@/components/noticiaspainel.vue";

export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true;
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  components: {
    Noticiaspainel
  },
  computed: {
    artigosOrdenados() {
      return this.$store.getters.artigosOrdenados;
    },
    noticiasOrdenados() {
      return this.$store.getters.noticiasOrdenados;
    }
  }
};
</script>

<style>
.home {
  margin-bottom: 50px;
  margin-top: 50px;
}
.last-pub-title {
  font-weight: 700px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
  font-size: 1.5em;
  padding-left: 7px;
}
.about-us {
  font-weight: 700px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
  font-size: 1.5em;
  padding-left: 7px;
}
.about-us-text {
  padding-left: 10px;
  padding-right: 10px;
}
.noticia-avatar-circle {
  border-radius: 10%;
}
.noticia-avatar {
  width: 100%;
  height: 150px;
  margin: 0 auto;
  object-fit: cover;
  background-color: gray;
}
.noticia-titulo {
  font-weight: 700;
  font-size: 1.35em;
}
.noticia {
  margin-bottom: 20px;
}
#carousel .img-fluid {
  min-height: 400px;
  max-height: 600px;
  object-fit: cover;
}
.ver-mais {
  font-weight: 700;
  text-decoration: underline;
  font-size: 1.2em;
  padding-left: 15px;
}
</style>
