<template>
  <div class="video">
    <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
    <main>
      <video-player-box :playerOptions="playerOptions" />
    </main>
  </div>
</template>
<script>
import Head from '@/components/head';
import VideoPlayerBox from '../common/video-player-box';

export default {
  name: 'video-page',
  components: {
    Head,
    VideoPlayerBox,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    },
    playerOptions () {
      return this.videoList[this.optionNumber];
    }
  },
  data () {
    return {
      isSearchShow: false,
      videoList: [
        {
          muted: true,
          language: 'zh-cn',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: require("../../../../public/videos/结婚.mp4")
          }],
          poster: require('../../../../public/img/home/flower.gif'),
        },
        {
          muted: true,
          language: 'zh-cn',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: require('../../../../public/img/home/不过是一场宿醉.jpg'),
        },
        {
          muted: true,
          language: 'zh-cn',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: require("../../../../public/videos/科幻.mp4")
          }],
          poster: require('../../../../public/img/home/归来仍少年.jpg'),
        },
      ],
      optionNumber: 0,
    }
  },
  methods: {
    updataNumber (index) {
      if (index < 0) {
        this.optionNumber = 0;
        return;
      }
      if (index > this.videoList.length - 1) {
        this.optionNumber = this.videoList.length - 1;
        return;
      }
      this.optionNumber = index;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
