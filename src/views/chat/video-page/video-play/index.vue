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
      console.log('开始播放');
    },
    //暂停事件
    onPlayerPause (e) {
      console.log(e);
      console.log('暂停');
    },
    //播放结束事件
    onPlayerEnded (e) {
      console.log(e);
      console.log('播放暂停');
    },
    //等待事件
    onPlayerWaiting (e) {
      console.log(e);
      console.log('缓存等待');
    },
    onPlayerPlaying (e) {
      console.log(e);
    },
    onPlayerLoadeddata (e) {
      console.log(e);
      console.log('加载数据');
    },
    onPlayerTimeupdate (e) {
      console.log(e);
      console.log('等待数据');
    },
    onPlayerCanplay (e) {
      console.log(e);
      console.log('可以播放');
    },
    onPlayerCanplaythrough (e) {
      console.log(e);
      console.log('可以通过');
    },
    playerStateChanged (e) {
      console.log(e);
      console.log('状态改变');
    },
    playerReadied () {
      console.log('播放前，准备好了')
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
