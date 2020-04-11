<template>
  <v-footer dark padless>
    <v-card flat tile class="deep-purple text-center" width="100%">
      <div class="attribution">
        <img src="../../assets/imdb.svg" />
      </div>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Movie Info</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.attribution {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.attribution img {
  width: 300px;
}
</style>