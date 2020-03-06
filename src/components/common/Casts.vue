<template>
  <div class="video" v-show="casts.length > 0">
    <h2 class="text-center deep-purple--text mt-5">{{ name }} Casts</h2>

    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-card
          v-for="cast in casts"
          :key="cast.id"
          v-show="casts.length > 0 && cast.profile_path !== null"
          max-width="200"
          class="mx-auto mt-3"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                cast.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-img
            :src="'https://image.tmdb.org/t/p/w1280' + cast.profile_path"
            height="250"
          ></v-img>

          <v-card-actions>
            <v-card-text text class="deep-purple--text accent-4">{{
              cast.character
            }}</v-card-text>
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
          console.log(res.data);
          this.casts = res.data.cast;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style></style>
