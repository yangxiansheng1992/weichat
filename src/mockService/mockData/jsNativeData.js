import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.jsNativeList}`, 'post', {
  'data': [
    {
      classinfo: '原型',
      title: '原型',
      time: Mock.Random.time('A HH:mm:ss'),
      id: '知识点1',
      content: '你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解',
    },
  ],
});