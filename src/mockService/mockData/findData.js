import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.strategyList}`, 'post', {
  'data': [
    {
      title: 'web组件化',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'webComponents',
    },
    {
      title: '渐进式网络应用程序（简称PWA）',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'pwa',
    },
    {
      title: '如果你想成为全栈，GraphQL是你突破口',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'GraphQL',
    },
    {
      title: 'Serverless Services（无服务器服务）',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'Serverless Services',
    },
    {
      title: '网站静态化',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'JAMStack',
    },
    {
      title: 'javascript AI',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'AI',
    },
    {
      title: 'javascript 物联网（lot）',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: '物联网',
    },
    {
      title: '知识挖掘技术',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: '知识挖掘技术',
    },
  ],
});