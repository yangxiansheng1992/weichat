import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

// const obj = {
//   aa: '11', bb: '22', cc: '33', dd: '44',
// };
// Mock.mock(`${mockApiUrl.friendList}`, {
//   'user|1-3': [{ // 随机生成1到3个数组元素
//     name: '@cname', // 中文名称
//     'id|+1': 88, // 属性值自动加 1，初始值为88
//     'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
//     birthday: '@date("yyyy-MM-dd")', // 日期
//     city: '@city(true)', // 中国城市
//     color: '@color', // 16进制颜色
//     'isMale|1': true, // 布尔值
//     'isFat|1-2': true, // true的概率是1/3
//     'fromObj|2': obj, // 从obj对象中随机获取2个属性
//     'fromObj2|1-3': obj, // 从obj对象中随机获取1至3个属性
//     'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
//     'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
//     'friends|2': ['jack', 'jim'], // 重复2次属性值生成一个新数组
//   }, {
//     gf: '@cname',
//   }],
// });


Mock.mock(`${mockApiUrl.friendList}`, {
  'list': [
    {
      "type": 'a',
      'user|20': [{
        name: '@cname', // 中文名称
        'id|+1': 110, // 属性值自动加 1，初始值为110
        'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
        birthday: '@date("yyyy-MM-dd")', // 日期
        city: '@city(true)', // 中国城市
        color: '@color', // 16进制颜色
      },],
    },
    {
      "type": 'b',
      'user|20': [{
        name: '@cname', // 中文名称
        'id|+1': 110, // 属性值自动加 1，初始值为110
        'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
        birthday: '@date("yyyy-MM-dd")', // 日期
        city: '@city(true)', // 中国城市
        color: '@color', // 16进制颜色
      },],
    },
    {
      "type": 'c',
      'user|20': [{
        name: '@cname', // 中文名称
        'id|+1': 110, // 属性值自动加 1，初始值为110
        'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
        birthday: '@date("yyyy-MM-dd")', // 日期
        city: '@city(true)', // 中国城市
        color: '@color', // 16进制颜色
      },],
    },
  ]
});

Mock.mock(`${mockApiUrl.chat}`, {
  'quotes': [
    {
      name: '@cname', // 中文名称
      'id|+1': 88, // 属性值自动加 1，初始值为88
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      birthday: '@date("yyyy-MM-dd")', // 日期
      city: '@city(true)', // 中国城市
      color: '@color', // 16进制颜色
      text: '我尊重同性恋，我理解抑郁症，我会喂地下的流浪猫，我会给老奶奶让座，我会对店员说谢谢...纵然，我平庸，长相普通，脾气不好，吃尽生活的苦，但我依然，想努力地成为一个善良的人'
    },
    {
      name: '@cname', // 中文名称
      'id|+1': 88, // 属性值自动加 1，初始值为88
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      birthday: '@date("yyyy-MM-dd")', // 日期
      city: '@city(true)', // 中国城市
      color: '@color', // 16进制颜色
      text: '我跑啊跑啊，就是为了追上那个曾经被赋予众望的自己'
    },
    {
      name: '@cname', // 中文名称
      'id|+1': 88, // 属性值自动加 1，初始值为88
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      birthday: '@date("yyyy-MM-dd")', // 日期
      city: '@city(true)', // 中国城市
      color: '@color', // 16进制颜色
      text: '如果没用梦想，那跟咸鱼又有什么分别，如果只能做咸鱼，也要做最咸的那条'
    },
    {
      name: '@cname', // 中文名称
      'id|+1': 88, // 属性值自动加 1，初始值为88
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      birthday: '@date("yyyy-MM-dd")', // 日期
      city: '@city(true)', // 中国城市
      color: '@color', // 16进制颜色
      text: '每一根韭菜都会找到属于自己的牙缝'
    },
    {
      name: '@cname', // 中文名称
      'id|+1': 88, // 属性值自动加 1，初始值为88
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      birthday: '@date("yyyy-MM-dd")', // 日期
      city: '@city(true)', // 中国城市
      color: '@color', // 16进制颜色
      text: '我们一边受伤，一边行走，一边扇自己耳光，一边就地自省。有时候觉得自己像个哲学家，有时候觉得自己更像是胡言乱语的神经病，而更多时候，觉得这世界疯狂无情却不乏美丽。'
    },
    {
      name: '@cname', // 中文名称
      'id|+1': 88, // 属性值自动加 1，初始值为88
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      birthday: '@date("yyyy-MM-dd")', // 日期
      city: '@city(true)', // 中国城市
      color: '@color', // 16进制颜色
      text: '永远不要试图和一个傻逼讲道理，因为傻逼会把你的智商拉到和他一样的水平线上，然后用他丰富的经验打败你。'
    },
  ],
});
