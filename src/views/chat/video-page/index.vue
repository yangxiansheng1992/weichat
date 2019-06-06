<template>
  <div class="video">
    <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
    <main>
      <scroll class="scroll">
        <div class="wrapper">
          <div class="iframe-box">
            <Video-player :playerOptions="playerOptions" />
          </div>
        </div>
      </scroll>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import Head from '@/components/head';
import Scroll from '@/components/scroll';
import VideoPlayer from './video-play/index';

export default {
  name: 'video-page',
  components: {
    Head,
    Scroll,
    VideoPlayer,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    }
  },
  data () {
    return {
      isSearchShow: false,
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: "/public/img/icons/msapplication-icon-144x144.png",
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
