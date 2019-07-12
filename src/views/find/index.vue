<template>
  <div class="find">
    <h1>决胜未来，前端技术战略性布局</h1>
    <ul class="strategy">
      <li v-for="item in strategyList" :key="item.id" @click="toRead(item)">
        <img :src="item.img" alt="" />
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import mockApi from '@/mockService/mockApi';

export default {
  name: 'find',
  data () {
    return {
      strategyList: []
    }
  },
  created () {
    this.getStrategyList();
  },
  methods: {
    getStrategyList () {
      mockApi.getStrategyList()
        .then(({ data, status }) => {
          if (!status) {
            // showToast('呀，出错啦！');
          }
          this.strategyList = [...data.data];
        })
        .catch((err) => {
          console.log(err);
          // showToast(err);
        });
    },
    toRead (data) {
      this.$router.push({
        name: 'read-page',
        params: {
          chatItemData: data,
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/compass.scss";
.find {
  width: 100%;
  height: 100%;
  h1 {
    width: 100%;
    height: px2rem(30px);
    text-align: center;
    line-height: px2rem(30px);
    font-size: px2rem(20px);
  }
  .strategy {
    width: 100%;
    li {
      height: px2rem(50px);
      display: flex;
      flex-direction: row;
      margin-top: px2rem(5px);
      border: 1px solid #a1a3a6;
      border-radius: px2rem(5px);
      box-shadow: 1px 1px 1px 1px #d9d6c3;
      img {
        width: px2rem(50px);
        height: auto;
      }
      span {
        flex: 1;
        text-indent: 1em;
        line-height: px2rem(50px);
        @include prefixer-value(display, -webkit-box, webkit moz o ms);
        @include prefixer-value(text-overflow, ellipsis, webkit moz o ms);
        @include prefixer-value(-webkit-line-clamp, 1, webkit moz o ms);
        overflow: hidden;
        /*! autoprefixer: off */
        @include prefixer-value(-webkit-box-orient, vertical, webkit moz o ms);
      }
    }
  }
}
</style>
