<template>
  <div class="borken">
    <div class="text" data-text="BROKEN">BROKEN</div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.borken {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(brown, sandybrown);
  .text {
    font-size: 3em;
    position: relative;
    /* color: transparent; */
  }
  .text::before,
  .text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: lightyellow;
    transition: 0.2s;
  }
  .text::before {
    clip-path: polygon(0 0, 60% 0, 30% 100%, 0 100%);
  }
  .text::after {
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 30% 100%);
  }
  .text:hover::before {
    left: -0.15em;
    transform: rotate(-5deg);
    top: -0.05em;
  }

  .text:hover::after {
    left: 0.15em;
    transform: rotate(5deg);
    top: 0.05em;
  }
}
/* 
  这个效果主要是使用了clip-path属性：该属性创建一个只有元素部分区域可以显示的剪切区域。区域内的部分显示，区域外的部分隐藏
 */
</style>