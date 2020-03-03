<template>
  <div>
    <div class="text-center d-flex justify-center align-center spinner" v-if="loading">
      <v-progress-circular :size="50" :width="5" color="purple" indeterminate></v-progress-circular>
    </div>

    <div v-else>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-card v-for="movie in movies" :key="movie.id" max-width="344" class="mx-auto mt-3">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{movie.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path" height="194"></v-img>

            <v-card-text>{{movie.overview}}</v-card-text>

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">Details</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>

      <v-divider class="mt-3 mb-3"></v-divider>

      <!-- <div v-if="totalPages !== null"> -->
      <Pagination :page="page" :totalPages="totalPages" :getMovies="getMovies" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import configVariables from "../config";
import Pagination from "./common/Pagination";

const { API_BASE_URL } = configVariables;

export default {
  name: "Movies",
  components: {
    Pagination
  },
  data: () => ({
    movies: [],
    page: 1,
    totalPages: 1,
    loading: false
  }),

  methods: {
    getMovies(page = 1) {
      if (page === 1) {
        this.loading = true;
      }

      axios
        .post(`${API_BASE_URL}/getPopularMovies`, { page })
        .then(res => {
          this.movies = res.data.results;
          this.page = res.data.page;
          this.totalPages = res.data.total_pages;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
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
