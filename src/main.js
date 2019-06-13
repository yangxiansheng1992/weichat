import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';
import router from './router';
import store from './vuex/store';
import VueAMap from 'vue-amap';
import './registerServiceWorker';
import './common/style.css';
import './common/font-awesome';
import './mockService/mockData';
import dayjs from 'dayjs';
// import RYtool from './rongcloud/ryTool'

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '7d80a00c8d5506eaac8050a1bfb549e7',
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0.11',
  v: '1.4.4'
});

Vue.config.productionTip = false;
Vue.prototype.$day = dayjs;
Vue.use(MintUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
