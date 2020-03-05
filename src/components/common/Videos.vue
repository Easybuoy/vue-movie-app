<template>
  <div class="video">
    <h2 class="text-center deep-purple--text mt-5">{{ name }} Videos</h2>

    <youtube
      class="single-video"
      v-for="video in videos"
      :key="video.id"
      :video-id="video.key"
      player-width="400"
      player-height="250"
    ></youtube>
  </div>
</template>

<script>
import axios from 'axios';
import configVariables from '../../config';

const { API_BASE_URL } = configVariables;

export default {
  name: 'Videos',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    selected_id: null,
    videos: []
  }),
  beforeMount() {
    this.iselected_id = this.id;
    this.getVideos();
  },
  methods: {
    getVideos() {
      axios
        .post(`${API_BASE_URL}/getVideos`, { id: this.id, path: 'videos' })
        .then(res => {
          this.videos = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style>
.video {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  justify-content: center;
}

.video h2 {
  width: 100%;
  font-family: 'Concert One', cursive;
  text-transform: uppercase;
}

.single-video {
  margin: 1rem;
}
</style>
