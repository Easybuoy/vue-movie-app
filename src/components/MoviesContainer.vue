<template>
  <div>
    <div
      class="text-center d-flex justify-center align-center spinner"
      v-if="loading"
    >
      <v-progress-circular
        :size="50"
        :width="5"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>

    <div v-else>
      <v-tabs background-color="white" color="deep-purple accent-4" centered>
        <v-tab @click="setPath('getNowPlayingMovies')">Now Playing</v-tab>
        <v-tab @click="setPath('getPopularMovies')">Popular</v-tab>
        <v-tab @click="setPath('getTopRatedMovies')">Top Rated</v-tab>

        <v-tab-item :key="1">
          <Movies
            :movies="movies"
            :page="page"
            :totalPages="totalPages"
            :getMovies="getMovies"
          />
        </v-tab-item>

        <v-tab-item :key="2">
          <Movies
            :movies="movies"
            :page="page"
            :totalPages="totalPages"
            :getMovies="getMovies"
          />
        </v-tab-item>

        <v-tab-item :key="3">
          <Movies
            :movies="movies"
            :page="page"
            :totalPages="totalPages"
            :getMovies="getMovies"
          />
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import configVariables from '../config';
import Movies from './common/Movies';

const { API_BASE_URL } = configVariables;

export default {
  name: 'MoviesContainer',
  components: {
    Movies
  },
  data: () => ({
    movies: [],
    page: 1,
    totalPages: 1,
    loading: false,
    path: 'getNowPlayingMovies'
  }),

  methods: {
    getMovies(page = 1) {
      if (this.movies.length === 0) {
        this.loading = true;
      }

      axios
        .post(`${API_BASE_URL}/${this.path}`, { page })
        .then(res => {
          this.movies = res.data.results;
          this.page = res.data.page;
          this.totalPages = res.data.total_pages;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
    setPath(path) {
      this.path = path;
      this.getMovies();
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>

<style>
.spinner {
  height: 100vh;
}
</style>
