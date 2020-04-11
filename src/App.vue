<template>
  <v-app>
    <Navigation />

    <router-view></router-view>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style scped>
html {
  scroll-behavior: smooth;
}
</style>