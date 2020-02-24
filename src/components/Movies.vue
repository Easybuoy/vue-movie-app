<template>
  <div>
    <h1>Hiiii</h1>
  </div>
</template>

<script>
import axios from 'axios';
import configVariables from '../config';

const { API_BASE_URL } = configVariables;

export default {
  methods: {
    getMovies() {
      axios
        .post(`${API_BASE_URL}/getMovies`, {})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>

<style></style>
