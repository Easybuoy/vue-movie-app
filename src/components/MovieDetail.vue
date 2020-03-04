<template>
  <p>Choi</p>
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
  },
  methods: {
    getMovieDetails() {

      axios
        .post(`${API_BASE_URL}/${this.path}`, {})
        .then(res => {
          this.movies = res.data.results;
          this.page = res.data.page;
          this.totalPages = res.data.total_pages;
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
