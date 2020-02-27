<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-card v-for="movie in movies" :key="movie.id" max-width="344" class="mx-auto mt-3">
          <v-list-item>
            <!-- <v-list-item-avatar color="grey"></v-list-item-avatar> -->
            <v-list-item-content>
              <v-list-item-title class="headline">{{movie.title}}</v-list-item-title>
              <!-- <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>

          <v-img :src="'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path" height="194"></v-img>

          <v-card-text>{{movie.overview}}</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Details</v-btn>
            <!-- <v-btn text color="deep-purple accent-4">Bookmark</v-btn> -->
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-divider class="mt-3 mb-3"></v-divider>

    <div class="text-center mb-5">
      <v-pagination
        v-model="page"
        :length="totalPages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import configVariables from "../config";

const { API_BASE_URL } = configVariables;

export default {
  data: () => ({
    movies: [],
    page: 1,
    totalPages: null
  }),
  methods: {
    getMovies() {
      axios
        .post(`${API_BASE_URL}/getPopularMovies`, {})
        .then(res => {
          this.movies = res.data.results;
          this.page = res.data.page;
          this.totalPages = res.data.total_pages;
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  },
  beforeMount() {
    this.getMovies();
  }
};
</script>

<style></style>
