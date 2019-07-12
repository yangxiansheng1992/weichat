<template>
  <div class="read-page">
    <me-head :title="userData.title" :isSearchShow="isSearchShow" />
    <div class="banner">
      <mt-swipe :auto="1500">
        <mt-swipe-item>
          <img src="../../../assets/read-page/lunzi.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../../assets/read-page/luxun.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../../assets/read-page/xiuyang.jpg" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <h1>用技术创造无限可能</h1>
  </div>
</template>
<script>
import MeHead from '@/components/head';

export default {
  components: {
    MeHead,
  },
  data () {
    return {
      isSearchShow: false,
    }
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
.read-page {
  width: 100%;
  height: 100%;
  text-align: center;
  .banner {
    width: 100%;
    height: px2rem(200px);
    img {
      width: 100%;
      height: auto;
    }
  }
  h1 {
    width: 100%;
    height: px2rem(30px);
    line-height: px2rem(30px);
  }
}
</style>
