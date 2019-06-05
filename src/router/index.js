import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';
Vue.use(Router);

const router = new Router({
  routes,
  mode: 'hash',
});

window.onblur = function () {
  document.title = '想你了，快回来';
};
router.afterEach((to) => {
  window.scrollTo(0, 0);
  window.document.title = to.meta.title;
  window.onfocus = function () {
    document.title = to.meta.title;
  };
});
export default router;