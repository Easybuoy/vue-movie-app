<template>
  <v-footer dark padless>
    <v-card flat tile class="deep-purple lighten-1 white--text text-center" width="100%">
      <div class="attribution">
        <img src="../../assets/imdb.svg" style="width: 300px; height:300px;" />
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
}
</style>