<template>
  <div class="chat-item" :style="style" @click="toChatroom">
    <div class="img-box">
      <img :src="data.img" alt="" />
    </div>
    <div class="text-box">
      <p>{{ data.title }}</p>
      <div>{{ data.time }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => { },
    },
  },
  computed: {
    style () {
      return { backgroundImage: this.data.img };
    },
  },
  methods: {
    toChatroom () {
      this.$router.push({
        name: 'chatroom',
        params: {
          chatItemData: this.data,
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/color.scss";

.chat-item {
  width: 100%;
  height: px2rem(50px);
  border-bottom: $border_color;
  display: flex;
  flex-direction: row;
  margin-bottom: px2rem(4px);
  .img-box {
    width: px2rem(50px);
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text-box {
    flex: 1;
    margin-left: px2rem(10px);
    border-bottom: 1px solid $border_color;
    p {
      height: 70%;
      font-size: px2rem(16px);
    }
    div {
      height: 30%;
      font-size: px2rem(14px);
      color: bisque;
    }
  }
}
</style>
