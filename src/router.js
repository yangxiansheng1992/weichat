import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/main.vue';

import Chat from './views/chat';
import Chatroom from './views/chat/chatroom/index.vue';
import UserSet from './views/chat/chatroom/user-set/index.vue';
import Fun from './views/chat/fun/index.vue';
import Video from './views/chat/video/index.vue';

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
      component: Main,
      redirect: '/chat',
      children: [
        {
          path: '/chat',
          name: 'chat',
          component: Chat,
        },
        {
          path: '/clientList',
          name: 'clientList',
          component: ClientList,
        },
        {
          path: '/find',
          name: 'find',
          component: Find,
        },
        {
          path: '/me',
          name: 'me',
          component: Me,
        },
      ]
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: Chatroom,
    },
    {
      path: '/user-set',
      name: 'user-set',
      component: UserSet,
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
    },
    {
      path: '/fun',
      name: 'fun',
      component: Fun,
    },
  ]
})
