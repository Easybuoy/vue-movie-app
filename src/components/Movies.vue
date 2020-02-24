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
        .post('/.netlify/functions/getMovies', {
        // .post('https://vuemovieapp.netlify.com/.netlify/functions/getMovies', {
        //   headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Headers':
        //       'Origin, X-Requested-With, Content-Type, Accept'
        //   }
        })
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
