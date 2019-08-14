<template>
  <div class="btn" @click="changeAnimate">
    <span :data-text="item" v-for="(item, index) in text" :key="index">{{
      item
    }}</span>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  methods: {
    changeAnimate () {
      this.animateName = 'fadeIn';
      this.timer = setTimeout(() => {
        this.animateName = '';
        clearTimeout(this.timer);
      }, 100);
    },
  },
  beforeDestroy () {
    clearTimeout(this.timer);
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/animate.scss";
.btn {
  display: inline-block;
  min-width: 70px;
  height: 50px;
  padding: 0 10px;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  margin-top: px2rem(5px);
  border: 1px solid yellow;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  @include prefixer-value(display, -webkit-box, webkit moz o ms);
  @include prefixer-value(text-overflow, ellipsis, webkit moz o ms);
  @include prefixer-value(-webkit-line-clamp, 1, webkit moz o ms);
  /*! autoprefixer: off */
  @include prefixer-value(-webkit-box-orient, vertical, webkit moz o ms);
  span {
    display: inline-block;
    color: red;
    transition: 0.5s;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
  span:nth-child(odd) {
    /* 奇数span */
    transform: translateY(-100%);
  }
  span:nth-child(even) {
    /* 偶数span */
    transform: translateY(100%);
  }
  span::before {
    content: attr(data-text);
    position: absolute;
    color: royalblue;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
  span:nth-child(odd)::before {
    transform: translateY(100%);
  }
  span:nth-child(even)::before {
    transform: translateY(-100%);
  }
}
.btn:hover span {
  transform: translateY(0);
}
</style>