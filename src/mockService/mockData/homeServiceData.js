import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.chatListUrl}`, 'post', {
  'data|5-10': [{
    title: '@cname',
    img: Mock.Random.image(),
    time: Mock.Random.time('A HH:mm:ss'),
  }],
});
