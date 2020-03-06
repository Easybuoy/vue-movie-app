<template>
  <div>
    <div class="text-center d-flex justify-center align-center spinner" v-if="loading">
      <v-progress-circular :size="50" :width="5" color="deep-purple" indeterminate></v-progress-circular>
    </div>

    <div v-else-if="error !== null" class="err mt-5">
      <v-alert type="error" dismissible="true">{{ error }}</v-alert>

      <a @click="this.reloadPage">
        <v-btn class="ma-2" tile color="success" dark>Reload Page</v-btn>
      </a>
    </div>

    <div v-else>
      <v-tabs background-color="white" color="deep-purple accent-4" centered>
        <v-tab>Overview</v-tab>
        <v-tab>Recomendations</v-tab>
        <v-tab>Reviews</v-tab>

        <v-tab-item :key="1">
          <v-container fluid class="grey lighten-5 justify-space-between">
            <div class="contianer" no-gutters>
              <div class="movie-detail">
                <h1 class="movie-title deep-purple--text mt-2 mb-2">{{ serie.name }}</h1>

                <Divider />

                <h4 class="movie-overview list-item grey--text text--darken-2">{{ serie.overview }}</h4>

                <Divider />

                <div class="list">
                  <h3 class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Release Date:&nbsp;</span>
                    {{ serie.release_date }}
                  </h3>

                  <Divider />

                  <!-- <h3 class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Genre:&nbsp;</span>

                    <span :v-text="this.formatGenre(serie.genres)">{{ genre }}&nbsp;</span>
                  </h3> -->
                  <Divider />

                  <!-- <h3 class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Languages: &nbsp;</span>

                    <span :v-text="this.formatLanguage(serie.spoken_languages)">{{ language }}</span>
                  </h3> -->
                  <Divider />

                  <!-- <h3 class="list-item grey--text text--darken-2">
                    <span
                      class="deep-purple--text"
                      :v-text="this.formatRuntime(serie.runtime)"
                    >Runtime:&nbsp;</span>
                    {{ runtime }}
                  </h3>-->

                  <Divider />

                  <h3 class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Status:&nbsp;</span>
                    {{ serie.status }}
                  </h3>

                  <Divider />

                  <!-- <h3 v-show="serie.tagline.length > 0" class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Tagline:&nbsp;</span>
                    {{ serie.tagline }}
                  </h3>-->

                  <!-- <Divider v-show="serie.tagline.length > 0" /> -->

                  <h3 class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Average Vote:&nbsp;</span>
                    {{ serie.vote_average }}
                  </h3>

                  <Divider />

                  <h3 class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Vote Count:&nbsp;</span>
                    {{ serie.vote_count }}
                  </h3>

                  <Divider />

                  <!-- <h3 class="list-item grey--text text--darken-2">
                    <span
                      class="deep-purple--text"
                      :v-text="this.formatCurrency(serie.revenue)"
                    >Revenue:&nbsp;</span>
                    {{ currency }}
                  </h3>-->

                  <Divider />

                  <!-- <h3 class="list-item grey--text text--darken-2">
                    <span
                      class="deep-purple--text"
                      :v-text="this.formatRateing(serie.adult)"
                    >Adult Rated:&nbsp;</span>
                    {{ rating }}
                  </h3>-->

                  <Divider />

                  <h3 class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Popularity:&nbsp;</span>
                    {{ serie.popularity }}
                  </h3>

                  <Divider />

                  <!-- <h3 class="list-item grey--text text--darken-2">
                    <span class="deep-purple--text">Production Countries:&nbsp;</span>

                    <span
                      :v-text="
                        this.formatProductionCountries(
                          serie.production_countries
                        )
                      "
                    >{{ production_countries }}</span>
                  </h3>-->

                  <Divider />

                  <div v-show="serie.production_companies.length > 0" class="production-companies">
                    <h3 class="deep-purple--text">Production Companies:</h3>

                    <span
                      class="production-company"
                      v-for="company in serie.production_companies"
                      :key="company.name"
                    >
                      <p class="grey--text" v-show="company.logo_path !== null">{{ company.name }}</p>
                      <img
                        v-show="company.logo_path !== null"
                        :src="
                          'https://image.tmdb.org/t/p/w500' + company.logo_path
                        "
                      />
                    </span>
                  </div>

                  <Divider />

                  <div class="links">
                    <a :href="serie.homepage" target="_blank">
                      <v-btn class="ma-2" tile color="deep-purple" dark>Movie Homepage</v-btn>
                    </a>

                    <a :href="'https://www.imdb.com/title/' + serie.imdb_id" target="_blank">
                      <v-btn class="ma-2" tile outlined color="deep-purple">Imdb</v-btn>
                    </a>
                  </div>
                </div>
              </div>

              <div class="movie-poster">
                <v-img :src="'https://image.tmdb.org/t/p/w1280' + serie.poster_path"></v-img>
              </div>
            </div>
          </v-container>
          <Videos :id="id" name="Tv" />
          <Casts :id="id" name="Tv" />
        </v-tab-item>

        <v-tab-item :key="2">
          <Recommendations :id="id" name="Tv" path="getTvDetail" />
          <SimilarSeries :id="id" name="Tv" />
        </v-tab-item>
        <v-tab-item :key="3">
          <Reviews :id="id" name="Tv" path="getTvDetail" />
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import configVariables from "../../config";
import Divider from "../common/Divider";
import Videos from "../common/Videos";
import Casts from "../common/Casts";
import Recommendations from "../common/Recommendations";
import SimilarSeries from "./SimilarSeries";
import Reviews from "../common/Reviews";

import {
  formatItemToString,
  convertTime,
  currencyConverter
} from "../../utils";

const { API_BASE_URL } = configVariables;

export default {
  name: "TvDetails",
  data: () => ({
    id: null,
    serie: {},
    loading: false,
    error: null,
    production_countries: "",
    runtime: 0,
    currency: "",
    genre: "",
    language: "",
    rating: ""
  }),
  created() {
    this.id = this.$route.params.id;
    this.getTvDetails();
  },
  methods: {
    getTvDetails() {
      this.loading = true;
      axios
        .post(`${API_BASE_URL}/getTvDetail`, { id: this.id })
        .then(res => {
          console.log(res.data);
          this.serie = res.data;
        })
        .catch(err => {
          this.error = err.message;
        })
        .finally(() => (this.loading = false));
    },
    formatProductionCountries(array) {
      this.production_countries = formatItemToString(array);
    },
    formatGenre(array) {
      this.genre = formatItemToString(array);
    },
    formatRuntime(runtime) {
      this.runtime = convertTime(runtime);
    },
    formatCurrency(currency) {
      this.currency = currencyConverter(currency);
    },
    formatLanguage(languages) {
      this.language = formatItemToString(languages);
    },
    formatRateing(rating) {
      if (rating == true) {
        this.rating = "Yes";
      } else {
        this.rating = "No";
      }
    },
    reloadPage() {
      return window.location.reload();
    }
  },

  components: {
    Divider,
    Videos,
    Casts,
    Recommendations,
    SimilarSeries,
    Reviews
  }
};
</script>

<style>
.contianer {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}

.movie-poster {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  object-fit: cover;
  justify-content: center;
}

.movie-poster img {
  width: 100%;
  object-fit: cover;
}

.err {
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.err a {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.movie-detail {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

@media only screen and (max-width: 1300px) {
  .movie-poster {
    width: 50%;
  }

  .movie-detail {
    width: 60%;
  }
}

.movie-detail .movie-title {
  font-family: "Concert One", cursive;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
}

.movie-overview {
  width: 100%;
  font-size: 1.2rem;
}

.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  width: 100%;
  font-family: "Mallanna", sans-serif;
}

.production-companies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.production-company {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.production-company p {
  font-size: 0.8rem;
}

.production-company img {
  width: 50px;
  height: 50px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

@media only screen and (max-width: 1300px) {
  .contianer {
    flex-direction: column-reverse;
    align-items: center;
  }

  .movie-poster {
    margin: 1rem 0;
    width: 70%;
  }

  .movie-detail {
    margin: 1rem 0;
    width: 70%;
  }
}

@media only screen and (max-width: 700px) {
  .movie-poster {
    width: 90%;
  }

  .movie-detail {
    width: 90%;
  }
}

@media only screen and (max-width: 500px) {
  .movie-poster {
    width: 97%;
  }

  .movie-detail {
    width: 97%;
  }
}
</style>
