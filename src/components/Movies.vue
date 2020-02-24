<template>
  <div>
    <h1>Hiiii</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    getMovies() {
      axios
        .post('/.netlify/functions/getMovies', {})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>

<style></style>
