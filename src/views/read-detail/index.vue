<template>
  <div class="read">
    <Head :title="readData.title" :isSearchShow="isSearchShow"></Head>
    <main>
      <p>{{ readData.detail.head }}</p>
      <div v-for="item in readData.detail.list" :key="item.name">
        <span>{{ item.name }}</span>
        <span>{{ item.text }}</span>
      </div>
    </main>
  </div>
</template>
<script>
import Head from '@/components/head';
export default {
  components: {
    Head,
  },
  computed: {
    readData () {
      return { ...this.$route.params.meItemData };
    }
  },
  data () {
    return {
      isSearchShow: false,
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
.read {
  width: 100%;
  height: 100%;
  main {
    @include prefixer-value(height, calc(100% - 3.125rem), webkit moz o ms);
    @include prefixer(overflow-scrolling, touch, webkit moz o ms);
    @include prefixer(scroll-behavior, smooth, webkit moz o ms);
    overflow: auto;
    p {
      height: px2rem(60px);
      line-height: 30px;
      font-size: px2rem(22px);
    }
    div {
      display: flex;
      flex-direction: column;
      padding: 0 px2rem(5px);
      span:nth-child(1) {
        font-size: px2rem(20px);
        color: red;
      }
      span:nth-child(2) {
        text-indent: 2em;
      }
    }
  }
}
</style>
