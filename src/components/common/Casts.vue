<template>
  <div class="video" v-show="videos.length > 0">
    <h2 class="text-center deep-purple--text mt-5">{{ name }} Casts</h2>
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
        .post(`${API_BASE_URL}/getMovieDetail`, { id: this.id, path: 'credits' })
        .then(res => {
          console.log(res.data);
          this.casts = res.data.results;
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
