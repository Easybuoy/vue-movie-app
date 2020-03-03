<template>
  <div>
    <v-carousel
      v-model="model"
      height="92vh"
      cycle=""
      interval="5000"
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="item in items"
        :key="item.id"
        :src="'https://image.tmdb.org/t/p/w1280' + item.backdrop_path"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3 text-uppercase white--text ">
            <h3 class="mv-title">{{ item.title }}</h3>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from 'axios';
import configVariables from '../config';
const { API_BASE_URL } = configVariables;

export default {
  data() {
    return {
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      model: 0,
      items: []
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
    }
  },
  beforeMount() {
    this.getTrending();
  }
};
</script>

<style>
.mv-title {
  font-family: 'Concert One', cursive;
}
</style>
