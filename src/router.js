import Vue from 'vue';
import Router from 'vue-router';
import Chat from './views/chat';
import ClientList from './views/clientList';
import Find from './views/find';
import Guide from './views/guide';
import Me from './views/me';
import Register from './views/register';
import Login from './views/login';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'chat',
      component:Chat,
    },
    {
      path: '/',
      name:'chat',
      component:Chat,
    },
    {
      path: 'clientList',
      name:'clientList',
      component:ClientList,
    },
    {
      path: 'find',
      name:'find',
      component:Find,
    },
    {
      path: 'me',
      name:'me',
      component:Me,
    },
    {
      path: '/guide',
      name:'guide',
      component:Guide,
    },
    {
      path: '/login',
      name:'login',
      component:Login,
    },
    {
      path: '/register',
      name:'register',
      component:Register,
    },
  ]
})
