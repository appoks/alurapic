import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

import './directives/Zoomable';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
