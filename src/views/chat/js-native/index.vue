<template>
  <div class="js-native">
    <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
    <div class="classification">
      <span v-for="item in list" :key="item.id">{{ item.classinfo }}</span>
    </div>
    <div class="classinfoList">
      <p>原型链</p>
    </div>
  </div>
</template>
<script>
import Head from '@/components/head';
import mockApi from '@/mockService/mockApi';

export default {
  components: {
    Head,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    }
  },
  data () {
    return {
      isSearchShow: false,
      list: [],
    }
  },
  created () {
    this.getJsNativeList();
  },
  methods: {
    getJsNativeList () {
      mockApi.getJsNativeList()
        .then(({ data, status }) => {
          if (!status) {
            // showToast('呀，出错啦！');
          }
          this.list = [...data.data];
        })
        .catch((err) => {
          console.log(err);
          // showToast(err);
        });
    },
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
.js-native {
  width: 100%;
  height: 100%;
  .classification {
    width: 100%;
    height: px2rem(100px);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    span {
      padding: px2rem(3px) px2rem(5px);
      line-height: px2rem(15px);
      font-size: px2rem(15px);
      background-color: #e14844;
      border: px2rem(2px) solid #ece5db;
      border-radius: px2rem(10px);
      color: #f5f5f5;
      box-shadow: 0 0 0 1px #e14844;
    }
  }
  .classinfoList {
    width: 100%;
    height: px2rem(200px);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    p {
      width: 33.333%;
      height: px2rem(30px);
      text-align: center;
      line-height: px2rem(30px);
      @include prefixer-value(display, -webkit-box, webkit moz o ms);
      @include prefixer-value(text-overflow, ellipsis, webkit moz o ms);
      @include prefixer-value(-webkit-line-clamp, 1, webkit moz o ms);
      overflow: hidden;
      /*! autoprefixer: off */
      @include prefixer-value(-webkit-box-orient, vertical, webkit moz o ms);
    }
  }
}
</style>
