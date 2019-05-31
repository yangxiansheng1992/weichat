import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.chatListUrl}`, 'post', {
  'data|10-15': [{
    title: '@cname',
    img: Mock.Random.image(),
    time: Mock.Random.time('A HH:mm:ss'),
  }],
});
