<template>
  <div class="video">
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    >
    </video-player>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'video-play',
  props: {
    playerOptions: {
      type: Object,
      required: true,
    }
  },
  components: {
    videoPlayer,
  },
  methods: {
    //开始播放事件
    onPlayerPlay (e) {
      console.log(e);
    },
    //暂停事件
    onPlayerPause (e) {
      console.log(e);
    },
    //播放结束事件
    onPlayerEnded (e) {
      console.log(e);
    },
    //等待事件
    onPlayerWaiting (e) {
      console.log(e);
    },
    onPlayerPlaying (e) {
      console.log(e);
    },
    onPlayerLoadeddata (e) {
      console.log(e);
    },
    onPlayerTimeupdate (e) {
      console.log(e);
    },
    onPlayerCanplay (e) {
      console.log(e);
    },
    onPlayerCanplaythrough (e) {
      console.log(e);
    },
    playerStateChanged (e) {
      console.log(e);
    },
    playerReadied () {

    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
.video {
  width: 100%;
  height: 100%;
  .video-player-box {
    width: 100%;
    height: 100%;
  }
}
</style>
