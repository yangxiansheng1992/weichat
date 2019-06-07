<template>
  <div class="video-box">
    <div class="video"></div>
    视频播放器
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";

.video-box {
  padding-bottom: 56.25%;
  height: 0;
  position: relative;
  .video {
    width: 100%;
    height: 100%;
    background-color: aquamarine;
    position: absolute;
  }
}
</style>
