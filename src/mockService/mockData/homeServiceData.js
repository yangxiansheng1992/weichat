import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.chatListUrl}`, 'post', {
  'data': [
    {
      title: 'lol开黑（聊天）',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'chatroom',
    },
    {
      title: '电影院',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'video-page',
    },
    {
      title: '音乐库',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'audio-page',
    },
    {
      title: '动画吧',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'animation-page',
    },
    {
      title: '高德地图',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'amap',
    },
    {
      title: 'js原生知识',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'js-native',
    },
    {
      title: 'vue知识点集中营',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'vue',
    },
    {
      title: 'react知识点集中营',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'react',
    },
    {
      title: '学习css(pc端效果)',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'css-study',
    },
  ],
});

Mock.mock(`${mockApiUrl.getToken}`, 'get', {
  'data': [
    {
      title: 'lol开黑（聊天）',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'chatroom',
    },
  ],
});