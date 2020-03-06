<template>
  <div class="video" v-show="casts.length > 0">
    <h2 class="text-center deep-purple--text mt-5">{{ name }} Casts</h2>

    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-card
          v-for="cast in casts"
          :key="cast.id"
          v-show="casts.length > 0 && cast.profile_path !== null"
          class="mx-auto mt-3 card"
        >
          <v-list-item>
            <v-list-item-content>
              <v-card-title>{{ cast.name }}</v-card-title>
            </v-list-item-content>
          </v-list-item>

          <v-img
            :src="'https://image.tmdb.org/t/p/w1280' + cast.profile_path"
            height="250"
          ></v-img>

          <v-card-actions>
            as
            <v-card-text text class="deep-purple--text text--darken-2 character"
              >({{ cast.character }})</v-card-text
            >
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

import configVariables from '../../config';

const { API_BASE_URL } = configVariables;

export default {
  name: 'Casts',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    selected_id: null,
    casts: [],
    loading: false
  }),
  beforeMount() {
    this.iselected_id = this.id;
    this.getVideos();
  },
  methods: {
    getVideos() {
      axios
        .post(`${API_BASE_URL}/getMovieDetail`, {
          id: this.id,
          path: 'credits'
        })
        .then(res => {
          const filteredData = res.data.cast
            .filter(cast => cast.profile_path !== null && cast.character !== '')
            .slice(0, 12);

          this.casts = filteredData;
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
.character {
  font-family: 'Mallanna', sans-serif;
  font-weight: bolder;
  font-size: 1rem;
}

.card {
  max-width: 260px;
}

@media only screen and (max-width: 550px) {
  .card {
    max-width: 350px;
  }
}
</style>
