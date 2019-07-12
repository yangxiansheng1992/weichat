<template>
  <div class="app-header" :style="style">
    <div class="left" v-if="isLeftShow" @click="goBack">
      <font-awesome-icon icon="angle-left" color="#fffffb" />
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="search" v-if="isSearchShow">
      <font-awesome-icon icon="search" color="#fffffb" />
    </div>
    <div class="right" slot="right">
      <slot name="right" class="icon"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isLeftShow: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    isSearchShow: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: '#1e2b39'
    },
  },
  computed: {
    style () {
      return { backgroundColor: this.bgColor };
    }
  },
  methods: {
    logClick () {
      console.log('选择')
    },
    goBack () {
      this.$router.go(-1);
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/compass.scss";

.app-header {
  width: 100%;
  height: px2rem(50px);
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .left {
    width: 10%;
    height: 100%;
    line-height: px2rem(50px);
    text-align: center;
    font-size: px2rem(25px);
  }
  .title {
    width: 70%;
    height: 100%;
    line-height: px2rem(50px);
    @include prefixer-value(display, -webkit-box, webkit moz o ms);
    @include prefixer-value(text-overflow, ellipsis, webkit moz o ms);
    @include prefixer-value(-webkit-line-clamp, 1, webkit moz o ms);
    overflow: hidden;
    /*! autoprefixer: off */
    @include prefixer-value(-webkit-box-orient, vertical, webkit moz o ms);
  }
  .search {
    width: 10%;
    height: 100%;
    line-height: px2rem(50px);
    text-align: center;
    font-size: px2rem(20px);
  }
  .right {
    width: 10%;
    height: 100%;
    line-height: px2rem(50px);
    text-align: center;
    .icon {
      font-size: px2rem(20px);
    }
  }
}
</style>

