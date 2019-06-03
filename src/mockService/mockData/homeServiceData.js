import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.chatListUrl}`, 'post', {
  'data': [
    {
      title: 'lol开黑',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
    },
    {
      title: '菜鸟互琢',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
    },
    {
      title: '吹水群',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
    },
  ],
});
