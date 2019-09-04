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
    <MeContainer class="scroll">
      <div class="content">
        <ul :style="ulWidth">
          <li v-for="item in imageList" :key="item" :style="styleWidth">
            <img :src="item" alt="" />
          </li>
        </ul>
      </div>
    </MeContainer>
  </div>
</template>
<script>
import $ from 'jquery';
import MeHead from '@/components/head';
import MeContainer from '@/components/container'

export default {
  components: {
    MeHead,
    MeContainer,
  },
  data () {
    return {
      isSearchShow: false,
      imageList: [
        require('../../../assets/read-page/xiuyang.jpg'),
        require('../../../assets/read-page/luxun.jpg'),
        require('../../../assets/read-page/lunzi.jpg'),
      ]
    }
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    },
    styleWidth () {
      console.log($('.banner'))
      return { width: $('.banner').eq(0).css('width') };
    },
    ulWidth () {
      const num = this.imageList.length;
      const w = parseInt(this.styleWidth, 10);
      return { width: `${w * num}px` }
    }
  },
  methods: {

  }
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
  .content {
    width: 100%;
    height: px2rem(200px);

    ul {
      height: 100%;

      li {
        /* display: inline-block; */
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
