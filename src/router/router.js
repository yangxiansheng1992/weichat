import Main from '@/views/main.vue';
// import Chat from '@/views/chat';
import Chatroom from '@/views/chat/chatroom/index.vue';
import UserSet from '@/views/chat/chatroom/user-set/index.vue';
import Fun from '@/views/chat/fun/index.vue';
import Video from '@/views/chat/video/index.vue';
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
    path: '/video',
    name: 'video',
    meta: {
      title: '电影院',
    },
    component: Video,
  },
  {
    path: '/fun',
    name: 'fun',
    meta: {
      title: '有趣集合',
    },
    component: Fun,
  },
];
