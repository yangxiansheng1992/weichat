<template>
  <div class="option-box" v-show="isShow">
    <span class="top"></span>
    <div class="option" v-for="item in list" :key="item.id" @click="item.click">
      <font-awesome-icon :icon="item.icon" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          title: '发起群聊', icon: 'comment', id: 123,
          click: () => {
            this.$router.push({
              name: 'chatroom',
              params: {
                chatItemData: { title: 'lol开黑' },
              }
            })
          },
        },
        {
          title: '添加朋友', icon: 'user-plus', id: 236,
          click: () => {
            console.log('添加朋友');
          },
        },
        {
          title: '扫一扫', icon: 'qrcode', id: 789,
          click: () => {
            console.log('打开摄像头扫一扫')
          },
        },
        {
          title: '收付款', icon: 'hand-holding-usd', id: 134,
          click: () => {
            console.log('去付款')
          },
        },
        {
          title: '帮助和反馈', icon: 'envelope', id: 234,
          click: () => {
            console.log('帮助和反馈')
          },
        },
      ],
      isShow: false,
    }
  },
  methods: {
    show () {
      this.isShow = true;
    },
    hide () {
      this.isShow = false;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";

.option-box {
  width: px2rem(120px);
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: px2rem(5px);
  position: absolute;
  top: 0;
  right: 0;
  .top {
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent black transparent;
    position: absolute;
    top: px2rem(-19px);
    right: px2rem(8px);
  }
  .option {
    margin: px2rem(10px);
    display: flex;
    flex-direction: row;
    span {
      margin-left: px2rem(10px);
    }
  }
}
</style>
