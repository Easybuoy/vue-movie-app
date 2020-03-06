<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-card
          v-for="serie in series"
          :key="serie.id"
          v-show="serie.overview.length > 0 && serie.backdrop_path"
          max-width="344"
          class="mx-auto mt-3"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{
                serie.name
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="'https://image.tmdb.org/t/p/w1280' + serie.backdrop_path" height="250"></v-img>
          <v-card-text>{{ serie.overview.slice(0, 100) + '...' }}</v-card-text>

          <v-card-actions>
            <a :href="'/serie/' + serie.id" v-if="preview === 'true'">
              <v-btn text color="deep-purple accent-4">Details</v-btn>
            </a>

            <router-link :to="'/serie/' + serie.id" v-else>
              <v-btn text color="deep-purple accent-4">Details</v-btn>
            </router-link>

            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-divider class="mt-3 mb-3"></v-divider>

    <Pagination
      v-show="this.preview === 'false'"
      :page="page"
      :totalPages="totalPages"
      :getNewPage="getSeries"
    />
  </div>
</template>

<script>
import Pagination from "../common/Pagination";

export default {
  name: "Series",
  components: {
    Pagination
  },
  props: {
    series: {
      type: Array,
      required: true
    },
    page: {
      type: Number,
      required: false,
      default: 1
    },
    totalPages: {
      type: Number,
      required: false,
      default: 1
    },
    getSeries: {
      type: Function,
      required: false,
      default: () => {}
    },
    preview: {
      type: String,
      required: false,
      default: "false"
    }
  }
};
</script>

<style></style>
