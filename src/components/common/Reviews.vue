<template>
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

  <div v-else-if="reviews.length === 0">
    <h2 class="text-center deep-purple--text mt-5">
      No Review(s) for this {{ name }} yet
    </h2>
  </div>

  <div v-else>
    <h2 class="text-center deep-purple--text mt-5 mb-3">{{ name }} Reviews</h2>
    <div class="review">
      <v-expansion-panels class="mb-6">
        <v-expansion-panel v-for="review in reviews" :key="review.id">
          <v-expansion-panel-header
            class="review-title deep-purple--text"
            expand-icon="mdi-menu-down"
            >{{ review.author }}</v-expansion-panel-header
          >
          <v-expansion-panel-content
            ><p class="review-content">
              {{ review.content }}
            </p></v-expansion-panel-content
          >
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <Pagination
      :page="page"
      :totalPages="totalPages"
      :getNewPage="this.loadMoreRecommendations"
    />
  </div>
</template>

<script>
import axios from 'axios';

import configVariables from '../../config';
import Pagination from './Pagination';

const { API_BASE_URL } = configVariables;

export default {
  name: 'Reviews',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  data: () => ({
    selected_id: null,
    reviews: [],
    loading: false,
    page: 0,
    totalPages: 0
  }),
  beforeMount() {
    this.iselected_id = this.id;
    this.getRecommendations();
  },
  methods: {
    getRecommendations(page = 1) {
      this.loading = true;
      axios
        .post(`${API_BASE_URL}/${this.path}`, {
          id: this.id,
          path: 'reviews',
          page
        })
        .then(res => {
          this.reviews = res.data.results;
          console.log(res.data)
          this.page = res.data.page;
          this.totalPages = res.data.total_pages;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
    loadMoreRecommendations(page = 1) {
      axios
        .post(`${API_BASE_URL}/getMovieDetail`, {
          id: this.id,
          path: 'reviews',
          page
        })
        .then(res => {
          this.reviews = res.data.results;
          this.page = res.data.page;
          this.totalPages = res.data.total_pages;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    Pagination
  }
};
</script>

<style>
.review {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
}

.review-title {
  font-family: 'Concert One', cursive;
}

.review-content {
  line-height: 2;
  font-family: 'Mallanna', sans-serif;
}

@media only screen and (max-width: 700px) {
  .review {
    width: 90%;
  }
}

@media only screen and (max-width: 500px) {
  .review {
    width: 97%;
  }
}
</style>
