<template>
  <div class="text-center d-flex justify-center align-center spinner" v-if="loading">
    <v-progress-circular :size="50" :width="5" color="deep-purple" indeterminate></v-progress-circular>
  </div>

  <div v-else-if="similarities.length === 0">
    <h2 class="text-center deep-purple--text mt-5">
      Similar {{ name }}
      <Movies :movies="similarities" preview="true" />
    </h2>
    <h3 class="text-center deep-purple--text mt-5 mb-5 not-found">No Similar {{ name }} found</h3>
  </div>

  <div v-else>
    <h2 class="text-center deep-purple--text mt-5">
      Similar {{ name }}
      <Movies :movies="similarities" preview="true" />
    </h2>
  </div>
</template>

<script>
import axios from "axios";

import Movies from "./Movies";
import configVariables from "../../config";

const { API_BASE_URL } = configVariables;

export default {
  name: "Recommendations",
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
    similarities: [],
    loading: false
  }),
  beforeMount() {
    this.iselected_id = this.id;
    this.getRecommendations();
  },
  methods: {
    getRecommendations() {
      this.loading = true;
      axios
        .post(`${API_BASE_URL}/getMovieDetail`, {
          id: this.id,
          path: "similar"
        })
        .then(res => {
          this.similarities = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    }
  },
  components: {
    Movies
  }
};
</script>

<style>
h2 {
  font-family: "Concert One", cursive;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
}

.not-found {
  font-family: "Mallanna", sans-serif;
}
</style>
