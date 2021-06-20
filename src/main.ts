import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import configToasted from './plugins/toasted';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueTheMask);

configToasted(Vue);

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
});

app.$mount('#app');
