import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';
import router from './router';
import store from './vuex/store';
import './registerServiceWorker';
import './common/style.css';

Vue.config.productionTip = false;
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
