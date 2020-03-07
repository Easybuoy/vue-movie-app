<template>
  <div class="text-center pagination">
    <a href="#top">
      <v-pagination
        v-if="this.page"
        v-model="selectedPage"
        :length="this.totalPages"
        :total-visible="5"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </a>
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
    getNewPage: {
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
      this.getNewPage(newPage);
    }
  }
};
</script>

<style>
.pagination {
  margin: 3rem 0;
}
</style>
