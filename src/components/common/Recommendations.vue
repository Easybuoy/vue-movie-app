<template>
  <div class="text-center d-flex justify-center align-center spinner" v-if="loading">
    <v-progress-circular :size="50" :width="5" color="deep-purple" indeterminate></v-progress-circular>
  </div>

  <div v-else class="mb-5">
    <h2 class="text-center deep-purple--text mt-5 ">
      {{ name }} Recommendations
      <Series v-if="path === 'getTvDetail'" :series="recommendations" preview="true" />
      <Movies v-else :movies="recommendations" preview="true" />
    </h2>
  </div>
</template>

<script>
import axios from "axios";

import Movies from "../Movies/Movies";
import Series from "../Series/Series";
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
    },
    path: {
      type: String,
      required: true
    }
  },
  data: () => ({
    selected_id: null,
    recommendations: [],
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
        .post(`${API_BASE_URL}/${this.path}`, {
          id: this.id,
          path: "recommendations"
        })
        .then(res => {
          this.recommendations = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    }
  },
  components: {
    Movies,
    Series
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
</style>
