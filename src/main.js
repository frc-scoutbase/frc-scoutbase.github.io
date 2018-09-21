import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Res from 'vue-resource';
import Vuetify from 'vuetify';
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(router);
Vue.use(Res);
Vue.use(Vuetify);
new Vue(
{
  router,
  render: h => h(App)
}).$mount('#app');

