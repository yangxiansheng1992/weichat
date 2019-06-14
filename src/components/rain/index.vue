<template>
  <ul class="bg-bubbles">
    <li v-for="i in 10" :key="i + 'rain'" :style="style">
      <img src="../../assets/money.png" alt="" />
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    formRadian: {
      type: String,
      default: '0px',
    },
    bgColor: {
      type: String,
      default: '175, 238, 238',
    },
    bgOpacity: {
      type: String,
      default: '0.13',
    },
  },
  computed: {
    style () {
      return { borderRadius: this.formRadian, backgroundColor: `rgba(${this.bgColor},${this.bgOpacity})` };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.bg-bubbles {
  position: absolute;
  top: px2rem(-100px);
  left: 0;
  width: 100%;
  height: 100%;
  li {
    position: absolute;
    top: 0;
    width: px2rem(40px);
    height: px2rem(40px);
    border-radius: 50%;
    list-style: none;
    @include prefixer-value(animation, square 5s, webkit moz o ms);
    @include prefixer-value(
      transition-timing-function,
      linear,
      webkit moz o ms
    );
    &:nth-child(1) {
      left: 10%;
    }
    &:nth-child(2) {
      left: 20%;
      width: px2rem(90px);
      height: px2rem(90px);
      @include prefixer-value(animation-delay, 1s, webkit moz o ms);
      @include prefixer-value(animation-duration, 0.5s, webkit moz o ms);
    }
    &:nth-child(3) {
      left: 25%;
      animation-delay: 2s;
    }
    &:nth-child(4) {
      left: 40%;
      width: px2rem(60px);
      height: px2rem(60px);
      @include prefixer-value(animation-delay, 1.5s, webkit moz o ms);
      @include prefixer-value(animation-duration, 0.5s, webkit moz o ms);
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 80%;
      width: px2rem(45px);
      height: px2rem(45px);
      @include prefixer-value(animation-delay, 1s, webkit moz o ms);
      @include prefixer-value(animation-duration, 0.5s, webkit moz o ms);
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(7) {
      left: 32%;
      width: px2rem(50px);
      height: px2rem(50px);
      @include prefixer-value(animation-duration, 1.3s, webkit moz o ms);
    }
    &:nth-child(8) {
      left: 55%;
      width: px2rem(20px);
      height: px2rem(20px);
      @include prefixer-value(animation-delay, 0.6s, webkit moz o ms);
      @include prefixer-value(animation-duration, 0.9s, webkit moz o ms);
    }
    &:nth-child(9) {
      left: 25%;
      width: px2rem(10px);
      height: px2rem(10px);
      @include prefixer-value(animation-delay, 1.4s, webkit moz o ms);
      @include prefixer-value(animation-duration, 0.2s, webkit moz o ms);
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(10) {
      left: 85%;
      width: px2rem(70px);
      height: px2rem(70px);
      @include prefixer-value(animation-delay, 1s, webkit moz o ms);
    }
  }
  @keyframes square {
    0% {
      @include prefixer-value(
        transform,
        translateY(0px) rotate(45deg),
        webkit moz o ms
      );
    }
    50% {
      @include prefixer-value(
        transform,
        translateY(700px) rotate(135deg),
        webkit moz o ms
      );
    }
    100% {
      @include prefixer-value(
        transform,
        translateY(1000px) rotate(180deg),
        webkit moz o ms
      );
    }
  }
}
</style>
