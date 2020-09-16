<template>
  <b-container>
    <b-carousel
      class="home"
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1920"
      img-height="1200"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    <b-row class="home">
      <b-col md="12" lg="7">
        <div class="about-us">Quem somos</div>
        <div class="text-justify about-us-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dictum eleifend purus. Mauris volutpat nunc quis eros condimentum,
            vitae lobortis lacus imperdiet. Maecenas ut quam pulvinar,
            condimentum dolor sit amet, dignissim velit. Etiam accumsan congue
            velit, eget rhoncus nibh hendrerit ut. Sed sagittis lectus at felis
            bibendum tempor. Integer ornare faucibus lacus vitae congue. Donec
            eget ipsum velit. Etiam vel ante consectetur, vestibulum urna sed,
            eleifend libero. Proin a imperdiet leo, at rutrum massa.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dictum eleifend purus. Mauris volutpat nunc quis eros condimentum,
            vitae lobortis lacus imperdiet. Maecenas ut quam pulvinar,
            condimentum dolor sit amet, dignissim velit. Etiam accumsan congue
            velit, eget rhoncus nibh hendrerit ut. Sed sagittis lectus at felis
            bibendum tempor. Integer ornare faucibus lacus vitae congue. Donec
            eget ipsum velit. Etiam vel ante consectetur, vestibulum urna sed,
            eleifend libero. Proin a imperdiet leo, at rutrum massa.
          </p>
        </div>
      </b-col>
      <b-col md="12" lg="5">
        <div class="about-us">Últimas publicações</div>
        <Artigolast
          v-for="artigo in artigosOrdenados.slice(0, 2)"
          v-bind:key="artigo.label"
          v-bind:label="artigo.label"
          v-bind:propriedades="artigo.properties"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Artigolast from "@/components/artigolast.vue";

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
    Artigolast
  },
  computed: {
    artigosOrdenados() {
      return this.$store.getters.artigosOrdenados;
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
.article-last-image {
  width: 100%;
  height: 110px;
}
.article-last-title {
  font-weight: 700;
  font-size: 1.35em;
}
.article-last-journal {
  font-weight: 300;
  color: #8f8f8f;
}
.article-last {
  margin-bottom: 20px;
}
</style>
