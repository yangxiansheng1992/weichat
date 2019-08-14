import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.jsNativeList}`, 'post', {
  'data': [
    {
      title: '原型',
      time: Mock.Random.time('A HH:mm:ss'),
      id: '知识点1',
      popopName: '',
      content: '你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解',
    },
    {
      title: 'svg',
      time: Mock.Random.time('A HH:mm:ss'),
      id: '知识点2',
      popopName: 'MeSvg',
      content: '你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解',
    },
  ],
});