<template>
  <div class="chat">
    <h1>我是chat,学习promise</h1>
    <div class="content">
      <input type="text" v-model="firstName" class="text" />
      <input type="text" v-model="obj.a" class="text" @blur="onBlur" />
      <p>{{ fullName }}</p>
      <p>{{ obj.a }}</p>
    </div>
    <p class="title">下面是功能列表</p>
    <div class="chat-room">
      <chat-item
        :data="item"
        v-for="(item, i) in chatList"
        :key="item.title + i"
      />
    </div>
  </div>
</template>
<script>
import mockApi from '@/mockService/mockApi';
import ChatItem from './components/chat-item/index';

export default {
  name: 'chat',
  components: {
    ChatItem,
  },
  data () {
    return {
      fullName: '',
      lastName: 'Yang',
      firstName: '',
      obj: {
        a: 123
      },
      chatList: [

      ],
    }
  },
  created () {
    this.promiseA(3000).then((res) => {
      console.log(res)
    });
    //======>
    //这表明只要声明了这个函数是async，那么内部不管怎么处理，都是返回一个promise；
    console.log(this.promiseC());
    this.promiseD().then((res) => {
      console.log(res);
    })
    //<=======
    this.getChatList();
  },
  watch: {
    firstName (newValute, oldValue) {
      this.fullName = this.lastName + newValute + oldValue;
    },
    promise () {
      this.promiseA(3000);
    }
  },
  methods: {
    onBlur () {
      this.obj.a = 456;
    },
    promiseA (timeNumber) {
      return new Promise((resolve, reject) => {
        if (typeof timeNumber != 'number') reject(new Error('参数必须是Number类型'));
        setTimeout(() => {
          resolve(this.promiseB(5000));
        }, timeNumber)

      })
    },
    promiseB (timeNumber) {
      return new Promise((resolve, reject) => {
        if (typeof timeNumber != 'number') reject(new Error('参数必须是Number类型'));
        setTimeout(() => {
          resolve('我经过8秒才出来');
        }, timeNumber)
      })
    },
    async promiseC () {
      return '我是Promise'
    },
    async promiseD () {
      return Promise.resolve('我是Promise')
    },
    getChatList () {
      mockApi.getChatList()
        .then(({ data, status }) => {
          if (!status) {
            // showToast('呀，出错啦！');
          }
          this.chatList = [...data.data];
        })
        .catch((err) => {
          console.log(err);
          // showToast(err);
        });
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "./index.scss";
</style>
