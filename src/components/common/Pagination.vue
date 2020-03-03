<template>
  <div class="text-center pagination">
    {{this.selectedPage}}
    <v-pagination
      v-if="this.page"
      v-model="selectedPage"
      :length="this.totalPages"
      :total-visible="10"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
      default: 1
    },
    totalPages: {
      type: Number,
      required: true,
      default: 1
    },
    getMovies: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    selectedPage: 1
  }),
  mounted() {
    this.selectedPage = this.page;
  },
  watch: {
    selectedPage: function(newPage) {
      this.getMovies(newPage);
    }
  }
};
</script>

<style>
.pagination {
  margin: 5rem 20rem 5rem 20rem;
}
</style>