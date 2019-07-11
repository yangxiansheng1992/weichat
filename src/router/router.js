import Main from '@/views/main.vue';
// import Chat from '@/views/chat';
import Chatroom from '@/views/chat/chatroom/index.vue';
import UserSet from '@/views/chat/chatroom/user-set/index.vue';
import Amap from '@/views/chat/amap/index.vue';
import VideoPage from '@/views/chat/video-page/index.vue';
import AudioPage from '@/views/chat/audio-page/index.vue';
import AnimationPage from '@/views/chat/animation-page/index.vue';
import JsNative from '@/views/chat/js-native/index.vue';
import Vue from '@/views/chat/vue/index.vue';
// import VueBasis from '@/views/chat/vue/page/vue-basis/index.vue'
// import VueExtension from '@/views/chat/vue/page/vue-extension/index.vue'
// import VueUi from '@/views/chat/vue/page/vue-ui/index.vue'
// import VueFunctional from '@/views/chat/vue/page/vue-functional/index.vue'
import React from '@/views/chat/react/index.vue';

// import ClientList from '@/views/clientList';
// import Find from '@/views/find';
// import Guide from '@/views/guide';
// import Me from '@/views/me';
// import Register from '@/views/register';
// import Login from '@/views/login';

export default [
  {
    path: '/',
    component: Main,
    redirect: '/chat',
    children: [
      {
        path: '/chat',
        name: 'chat',
        meta: {
          title: '首页',
        },
        component: () => import('@/views/chat'),
      },
      {
        path: '/clientList',
        name: 'clientList',
        meta: {
          title: '客户列表',
        },
        component: () => import('@/views/clientList'),
      },
      {
        path: '/find',
        name: 'find',
        meta: {
          title: '发现',
        },
        component: () => import('@/views/find'),
      },
      {
        path: '/me',
        name: 'me',
        meta: {
          title: '个人中心',
        },
        component: () => import('@/views/me'),
      },
    ]
  },
  {
    path: '/guide',
    name: 'guide',
    meta: {
      title: '推荐',
    },
    component: () => import('@/views/guide'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册',
    },
    component: () => import('@/views/register'),
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    meta: {
      title: '聊天室',
    },
    component: Chatroom,
  },
  {
    path: '/user-set',
    name: 'user-set',
    meta: {
      title: '聊天室设置',
    },
    component: UserSet,
  },
  {
    path: '/video-page',
    name: 'video-page',
    meta: {
      title: '电影院',
    },
    component: VideoPage,
  },
  {
    path: '/audio-page',
    name: 'audio-page',
    meta: {
      title: '音乐库',
    },
    component: AudioPage,
  },
  {
    path: '/animation-page',
    name: 'animation-page',
    meta: {
      title: '动画吧',
    },
    component: AnimationPage,
  },
  {
    path: '/amap',
    name: 'amap',
    meta: {
      title: '高德地图',
    },
    component: Amap,
  },
  {
    path: '/js-native',
    name: 'js-native',
    meta: {
      title: 'js原生知识',
    },
    component: JsNative,
  },
  {
    path: '/vue',
    name: 'vue',
    component: Vue,
    redirect: 'vue-basis',
    children: [
      {
        path: '/vue-basis',
        name: 'vue-basis',
        meta: {
          title: 'vue基础',
        },
        component: () => import('@/views/chat/vue/page/vue-basis/index.vue'),
      },
      {
        path: '/vue-extension',
        name: 'vue-extension',
        meta: {
          title: 'vue扩展',
        },
        component: () => import('@/views/chat/vue/page/vue-extension/index.vue'),
      },
      {
        path: '/vue-ui',
        name: 'vue-ui',
        meta: {
          title: 'vueUI库',
        },
        component: () => import('@/views/chat/vue/page/vue-ui/index.vue'),
      },
      {
        path: '/vue-functional',
        name: 'vue-functional',
        meta: {
          title: 'vue小功能',
        },
        component: () => import('@/views/chat/vue/page/vue-functional/index.vue'),
      },
    ]
  },
  {
    path: '/react',
    name: 'react',
    meta: {
      title: 'react知识点集中营',
    },
    component: React,
  },
];
