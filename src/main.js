import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueYouTubeEmbed from 'vue-youtube-embed';
import routes from './routes/index';

Vue.use(VueRouter);
Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;

const router = new VueRouter({ routes, mode: 'history' });
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
