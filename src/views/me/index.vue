<template>
  <div class="me">
    <div class="me-head">
      我是头部
    </div>
    <main>
      <me-item
        :data="item"
        v-for="(item, i) in meItemList"
        :key="item.title + i"
      />
    </main>
  </div>
</template>
<script>
import MeItem from './component/me-item/index';
import mockApi from '@/mockService/mockApi';

export default {
  name: 'me',
  components: {
    MeItem,
  },
  data () {
    return {
      meItemList: [],
    }
  },
  created () {
    this.getMeItemList();
  },
  methods: {
    getMeItemList () {
      mockApi.getMeItemList()
        .then(({ data, status }) => {
          if (!status) {
            // showToast('呀，出错啦！');
          }
          this.meItemList = [...data.data];
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
.me {
  width: 100%;
  height: 100%;
  .me-head {
    height: px2rem(100px);
    background-color: antiquewhite;
  }
}
</style>
