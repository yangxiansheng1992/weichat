import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.vueList}`, 'post', {
  'data': [
    {
      title: '你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解',
      time: Mock.Random.time('A HH:mm:ss'),
      id: '知识点1',
      content: 'VueJS作为一个前端框架，少不了模板引擎的功能，为了优化模板引擎，Vue会在编译阶段把template转化为render函数，在编译阶段之前（预编译阶段）我们可以定制一些模板引擎的行为，比如文本插入分隔符、指令、过滤器',
      linkPage: 'https://blog.csdn.net/qq_41047322/article/details/82935877',
    },
    {
      title: '你知道v-model的原理吗？说说看',
      time: Mock.Random.time('A HH:mm:ss'),
      id: '知识点2',
      content: 'v-model只是一个语法糖，等于:value+@input，真正的实现靠的还是： ﻿v-bind:绑定响应式数据，触发 input 事件并传递数据 (核心和重点)',
      linkPage: 'https://www.kancloud.cn/dataoedu/vue/327250',
    },
  ],
});