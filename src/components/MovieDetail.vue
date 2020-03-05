<template>
  <div>
    <div
      class="text-center d-flex justify-center align-center spinner"
      v-if="loading"
    >
      <v-progress-circular
        :size="50"
        :width="5"
        color="deep-purple"
        indeterminate
      ></v-progress-circular>
    </div>

    <div v-else>
      <v-tabs background-color="white" color="deep-purple accent-4" centered>
        <v-tab @click="setPath('getNowPlayingMovies')">Overview</v-tab>
        <v-tab @click="setPath('getPopularMovies')">Videos</v-tab>
        <v-tab @click="setPath('getTopRatedMovies')">Casts</v-tab>
        <v-tab @click="setPath('getTopRatedMovies')">Similar Movies</v-tab>
        <v-tab @click="setPath('getTopRatedMovies')">Recomendations</v-tab>
        <v-tab @click="setPath('getTopRatedMovies')">Reviews</v-tab>

        <v-tab-item :key="1">
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col>
                <div class="movie-detail">
                  <h1 class="movie-title deep-purple--text">
                    {{ movie.title }}
                  </h1>

                  <h4 class="mt-3">{{ movie.overview }}</h4>

                  <div style="width: 100%; border:1px solid green;">
                    <v-divider class="mt-3 mb-3"></v-divider>
                  </div>

                  <div class="list mt-3">
                    <h3>
                      <span class="deep-purple--text">Release Date:</span>
                      {{ movie.release_date }}
                    </h3>

                    <h3>
                      <span class="deep-purple--text">
                        Genre:
                      </span>

                      <span v-for="genre in movie.genres" :key="genre.id"
                        >{{ genre.name }}
                      </span>
                    </h3>

                    <h3>
                      <span class="deep-purple--text">
                        Genre:
                      </span>

                      <span v-for="genre in movie.genres" :key="genre.id"
                        >{{ genre.name }}
                      </span>
                    </h3>
                  </div>
                </div>
              </v-col>

              <v-col>
                <v-img
                  :src="'https://image.tmdb.org/t/p/w1280' + movie.poster_path"
                  class="movie-poster"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab-item :key="2"> </v-tab-item>
        <v-tab-item :key="3"> </v-tab-item>
        <v-tab-item :key="4"> </v-tab-item>
        <v-tab-item :key="5"> </v-tab-item>
        <v-tab-item :key="6"> </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import configVariables from '../config';

const { API_BASE_URL } = configVariables;

export default {
  name: 'MovieDetails',
  data: () => ({
    id: null,
    movie: {},
    loading: false,
    error: null
  }),
  created() {
    this.id = this.$route.params.id;
    this.getMovieDetails();
  },
  methods: {
    getMovieDetails() {
      this.loading = true;
      axios
        .post(`${API_BASE_URL}/getMovieDetail`, { id: this.id })
        .then(res => {
          console.log(res.data);
          this.movie = res.data;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style>
.movie-poster {
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  height: 100vh;
  object-fit: cover;
  justify-content: center;
  margin: 0 auto;
}

.movie-detail {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
}

.movie-detail .movie-title {
  font-family: 'Concert One', cursive;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
}

.movie-detail h4 {
  width: 100%;
}

.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.list h3 {
  width: 100%;
}

.list span {
}
</style>
