<template>
  <div>
    <v-carousel v-model="model" height="92vh" cycle interval="5000" show-arrows-on-hover>
      <v-carousel-item
        v-for="item in items"
        :key="item.id"
        :src="'https://image.tmdb.org/t/p/w1280' + item.backdrop_path"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3 text-uppercase white--text">
            <h3 class="mv-title">{{ item.title || item.name }}</h3>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <section class="movies mt-5" v-show="movies.length > 0">
      <h2 class="deep-purple--text">Movies</h2>
      <Movies preview="true" :movies="movies" />
    </section>

    <section class="movies mt-5" v-show="series.length > 0">
      <h2 class="deep-purple--text">Series</h2>
      <Series preview="true" :series="series" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import configVariables from "../config";
import Movies from "./Movies/Movies";
import Series from "./Series/Series";

const { API_BASE_URL } = configVariables;

export default {
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0,
      items: [],
      movies: [],
      series: []
    };
  },
  methods: {
    getTrending() {
      axios
        .post(`${API_BASE_URL}/getTrending`, {})
        .then(res => {
          this.items = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
    getMovies(page = 1) {
      axios
        .post(`${API_BASE_URL}/getNowPlayingMovies`, { page })
        .then(res => {
          this.movies = res.data.results;
        })
        .catch(err => {
          console.log(err);
          this.error = err;
        })
        .finally(() => (this.loading = false));
    },
    getSeries(page = 1) {
      if (this.series.length === 0) {
        this.loading = true;
      }

      axios
        .post(`${API_BASE_URL}/getAiringTodaySeries`, { page })
        .then(res => {
          this.series = res.data.results;
          this.page = res.data.page;
          this.totalPages = res.data.total_pages;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    }
  },
  beforeMount() {
    this.getTrending();
    this.getMovies();
    this.getSeries();
  },
  components: {
    Movies,
    Series
  }
};
</script>

<style>
.mv-title {
  font-family: "Concert One", cursive;
}
</style>
