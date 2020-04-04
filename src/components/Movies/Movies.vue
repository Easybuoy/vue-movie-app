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
              <v-list-item-title class="headline">
                {{
                movie.title
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path" height="250"></v-img>
          <v-card-text>{{ movie.overview.slice(0, 100) + '...' }}</v-card-text>

          <v-card-actions>
            <a :href="'/movie/' + movie.id" v-if="preview === 'true'">
              <v-btn text color="deep-purple accent-4">Details</v-btn>
            </a>

            <router-link :to="'/movie/' + movie.id" v-else>
              <v-btn text color="deep-purple accent-4">Details</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-divider class="mt-3 mb-3"></v-divider>

    <Pagination
      v-show="this.preview === 'false'"
      :page="page"
      :totalPages="totalPages"
      :getNewPage="getMovies"
    />
  </div>
</template>

<script>
import Pagination from "../common/Pagination";

export default {
  name: "Movies",
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
      required: false,
      default: 1
    },
    totalPages: {
      type: Number,
      required: false,
      default: 1
    },
    getMovies: {
      type: Function,
      required: false,
      default: () => {}
    },
    preview: {
      type: String,
      required: false,
      default: "false"
    }
  }
};
</script>

<style></style>
