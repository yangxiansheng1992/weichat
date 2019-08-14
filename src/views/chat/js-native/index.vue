<template>
  <div class="js-native">
    <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
    <div class="classification">
      <span
        v-for="item in list"
        :key="item.id"
        @click="showPopup(item.popopName)"
        >{{ item.title }}</span
      >
    </div>
    <Popup ref="popup" color="#feeeed">
      <div class="content" slot="content">
        <me-svg v-show="isPopupShow === 'MeSvg'" />
      </div>
    </Popup>
  </div>
</template>
<script>
import Head from '@/components/head';
import mockApi from '@/mockService/mockApi';
import Popup from '@/components/popup'
import MeSvg from './components/meSvg/index';

export default {
  components: {
    Head,
    Popup,
    MeSvg,
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
      isPopupShow: '',
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
    showPopup (popopName) {
      this.isPopupShow = popopName;
      this.$refs.popup.show();
    }
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
  .content {
    min-height: px2rem(200px);
  }
}
</style>
