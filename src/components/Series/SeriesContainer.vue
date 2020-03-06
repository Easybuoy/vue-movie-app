<template>
  <div>
    <div
      class="text-center d-flex justify-center align-center spinner"
      v-if="loading"
    >
      <v-progress-circular
        :size="50"
        :width="5"
        color="deep-purple"
        indeterminate
      ></v-progress-circular>
    </div>

    <div v-else>
      <v-tabs background-color="white" color="deep-purple accent-4" centered>
        <v-tab @click="setPath('getAiringTodaySeries')">Airing Today</v-tab>
        <v-tab @click="setPath('getPopularSeries')">Popular</v-tab>
        <v-tab @click="setPath('getTopRatedSeries')">Top Rated</v-tab>

        <v-tab-item :key="1">
          <Series
            :series="series"
            :page="page"
            :totalPages="totalPages"
            :getSeries="getSeries"
          />
        </v-tab-item>

        <v-tab-item :key="2">
          <Series
            :series="series"
            :page="page"
            :totalPages="totalPages"
            :getSeries="getSeries"
          />
        </v-tab-item>

        <v-tab-item :key="3">
          <Series
            :series="series"
            :page="page"
            :totalPages="totalPages"
            :getSeries="getSeries"
          />
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import configVariables from '../../config';
import Series from './Series';

const { API_BASE_URL } = configVariables;

export default {
  name: 'SeriesContainer',
  components: {
    Series
  },
  data: () => ({
    series: [],
    page: 1,
    totalPages: 1,
    loading: false,
    path: 'getAiringTodaySeries'
  }),

  methods: {
    getSeries(page = 1) {
      if (this.series.length === 0) {
        this.loading = true;
      }

      axios
        .post(`${API_BASE_URL}/${this.path}`, { page })
        .then(res => {
          this.series = res.data.results;
          this.page = res.data.page;
          this.totalPages = res.data.total_pages;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
    setPath(path) {
      this.path = path;
      this.getSeries();
    }
  },
  mounted() {
    this.getSeries();
  }
};
</script>

<style>
.spinner {
  height: 100vh;
}
</style>
