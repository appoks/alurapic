import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

import './directives/Zoomable';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'https://mighty-wildwood-73416.herokuapp.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
