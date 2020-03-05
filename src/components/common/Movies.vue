<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-card
          v-for="movie in movies"
          :key="movie.id"
          v-show="movie.overview.length > 0 && movie.backdrop_path"
          max-width="344"
          class="mx-auto mt-3"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                movie.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-img
            :src="'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path"
            height="250"
          ></v-img>
          <v-card-text>{{ movie.overview.slice(0, 100) + '...' }}</v-card-text>

          <v-card-actions>
            <router-link :to="'/movie/' + movie.id">
            <v-btn text color="deep-purple accent-4">Details</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-divider class="mt-3 mb-3"></v-divider>

    <Pagination :page="page" :totalPages="totalPages" :getNewPage="getMovies" />
  </div>
</template>

<script>
import Pagination from './Pagination';

export default {
  name: 'Movies',
  components: {
    Pagination
  },
  props: {
    movies: {
      type: Array,
      required: true
    },
    page: {
      type: Number,
      required: true,
      default: 1
    },
    totalPages: {
      type: Number,
      required: true,
      default: 1
    },
    getMovies: {
      type: Function,
      required: true
    }
  }
};
</script>

<style></style>
