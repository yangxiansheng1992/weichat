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
      title: '菜鸟互琢（视频）',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'video',
    },
    {
      title: '有趣的控制台',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'fun',
    },
  ],
});
