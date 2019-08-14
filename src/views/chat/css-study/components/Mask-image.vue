<template>
  <div class="mask">
    <i class="mask-i"></i>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100%;
  background: linear-gradient(yellow, red);
  position: relative;
  background: url("../../../../assets/css-img/suzui.jpg") no-repeat;
  background-size: 100% 100%;

  .mask-i {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url("../../../../assets/css-img/ludejintou.jpg") no-repeat;
    background-size: 100% 100%;
    -webkit-mask: no-repeat center;
    -webkit-mask-image: linear-gradient(red, black),
      url("../../../../assets/css-img/star.svg");
    -webkit-mask-size: cover, 120px 120px;
    -webkit-mask-composite: exclude;
    -webkit-mask-composite: source-out;
    animation: starIn 5s infinite;
  }
}
@keyframes starIn {
  to {
    -webkit-mask-size: 100%, 500% 500%;
    mask-size: 100%, 500% 500%;
  }
  from {
    -webkit-mask-size: 100%, 0 0;
    mask-size: 100%, 0 0;
  }
}
/*
 mask: 允许使用者通过部分或者完全隐藏一个元素的可见区域。这种效果可以通过遮罩或者裁切特定区域的图片,目前，兼容性不好；
 */
</style>