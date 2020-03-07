<template>
  <div class="video" v-show="videos.length > 0">
    <h2 class="text-center deep-purple--text mt-5">{{ name }} Videos</h2>

    <div class="single-video" v-for="video in videos" :key="video.id">
      <iframe
        className="embed-responsive-item"
        :src="'https://www.youtube.com/embed/' + video.key"
        allowFullScreen
        title="{movie.name}"
      />
    </div>
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
    },
    path: {
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
        .post(`${API_BASE_URL}/${this.path}`, { id: this.id, path: 'videos' })
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
  width: 30%;
  height: 250px;
}

.single-video iframe {
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1000px) {
  .single-video {
    width: 40%;
  }
}

@media only screen and (max-width: 800px) {
  .single-video {
    width: 43%;
  }
}

@media only screen and (max-width: 700px) {
  .single-video {
    width: 60%;
  }
}

@media only screen and (max-width: 600px) {
  .single-video {
    width: 70%;
  }
}

@media only screen and (max-width: 500px) {
  .single-video {
    width: 85%;
  }
}
</style>
