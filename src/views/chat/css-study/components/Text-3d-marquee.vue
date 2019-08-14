<template>
  <div class="marquee">
    <div class="box">
      <div class="inner" v-for="item in 2" :key="item">
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  }

}
</script>
<style lang="scss" scoped>
.marquee {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: navajowhite;

  .box {
    display: flex;

    .inner {
      width: 200px;
      height: 100px;
      line-height: 100px;
      font-size: 2em;
      font-weight: bold;
      white-space: nowrap;
      /* white-space:用来设置处理元素中的空白 */
      overflow: hidden;

      span {
        position: absolute;
        animation: marquee 5s linear infinite;
      }
    }

    .inner:nth-child(2n + 1) {
      background-color: indianred;
      color: darkred;
      transform-origin: right;
      transform: perspective(100px) rotateY(-15deg);
      /* 设置景深，使两边有角度偏转，更立体 */

      span {
        animation-delay: 2.5s;
        left: -100%;
      }
    }
    .inner:nth-child(2n) {
      background-color: lightcoral;
      color: antiquewhite;
      transform-origin: left;
      transform: perspective(100px) rotateY(15deg);
      /* transform-origin：更改一个元素变形的原点,变更旋转转换的中心点 */
    }
  }
}

@keyframes marquee {
  from {
    left: 100%;
  }

  to {
    left: -100%;
  }
}
</style>