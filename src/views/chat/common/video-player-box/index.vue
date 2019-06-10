<template>
  <div class="container">
    <div class="videos">
      <video-player
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        :events="events"
        @play="onPlayerPlay"
        @pause="onPlayerPause"
        @timeupdate="onPlayerTimeupdate($event)"
      >
      </video-player>
    </div>
    <div class="option">
      <div class="content">
        <mt-button class="top" @click="chageVideo(-1)">上一部video</mt-button>
        <div class="center">
          <mt-button class="left" @click="chageVolume(-0.1)">音量-</mt-button>
          <div class="action" @click="chageVideoType">
            <mt-button class="middle" v-if="trigger">暂停</mt-button>
            <mt-button class="middle" v-else>播放</mt-button>
          </div>
          <mt-button class="right" @click="chageVolume(0.1)">音量+</mt-button>
        </div>
        <mt-button class="bottom" @click="chageVideo(1)">下一部video</mt-button>
      </div>
      <div class="menu">
        <mt-button class="middle" @click="progress">快进</mt-button>
        <mt-button class="middle">快退</mt-button>
        <mt-button class="middle">全屏</mt-button>
      </div>
    </div>
    <div class="range-box">
      <p>mintUi进度条</p>
      <mt-progress :value="timeUpdateA" :bar-height="5">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </mt-progress>
      <p>自定义进度条</p>
      <div class="set-range">
        <span class="left">0%</span>
        <input
          type="range"
          :value="timeUpdateB"
          max="100"
          mmin="0"
          step="1"
          class="range"
          @change="fnTimeUpdateB($event)"
        />
        <span class="right">100%</span>
      </div>
    </div>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  props: {
    playerOptions: {
      type: Object,
      required: true,
    }
  },
  components: {
    videoPlayer,
  },
  data () {
    return {
      trigger: false,
      events: ['play', 'pause', 'timeupdate'],
      optionNumber: 0,
      updataVolume: 0.1,
      timeUpdateA: 0,
      timeUpdateB: 0,
    }
  },
  methods: {
    //自带播放事件
    onPlayerPlay () {
      this.trigger = true;
    },
    //自带暂停事件
    onPlayerPause () {
      this.trigger = false;
    },
    //自带改变进度方法
    onPlayerTimeupdate (player) {
      this.timeUpdateA = Math.floor(player.currentTime() / player.duration() * 100);
      this.timeUpdateB = Math.floor(player.currentTime() / player.duration() * 100);
    },
    //自定义切换视频
    chageVideo (index) {
      this.optionNumber += index;
      if (this.optionNumber >= this.$parent.$data.videoList.length - 1) {
        this.optionNumber = this.$parent.$data.videoList.length - 1;
      }
      if (this.optionNumber <= 0) {
        this.optionNumber = 0;
      }
      this.$parent.$data.optionNumber = this.optionNumber
      this.$parent.updataNumber(this.$parent.$data.optionNumber);
    },
    //自定义暂停或者播放
    chageVideoType () {
      this.trigger = !this.trigger;
      if (this.trigger) {
        this.$refs.videoPlayer.player.play()
      } else {
        this.$refs.videoPlayer.player.pause();
      }
    },
    //自定义改变音量
    chageVolume (index) {
      this.updataVolume = this.updataVolume * 10;
      index = index * 10
      this.updataVolume += index;
      this.updataVolume = this.updataVolume / 10;
      if (this.updataVolume <= 0) {
        this.updataVolume = 0;
      }
      if (this.updataVolume >= 1) {
        this.updataVolume = 1;
      }
      this.$refs.videoPlayer.player.volume(this.updataVolume);
    },
    //自定义获取当前进度
    fnTimeUpdateB () {
      console.log(this.timeUpdateB);
    },
    progress () {
      console.log('快进')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
