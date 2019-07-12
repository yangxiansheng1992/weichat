<template>
  <transition name="slide">
    <div class="vue-basis">
      <blackboard :data="basisData" />
      <p class="title">vue基础知识</p>
      <vue-list :list="list" @on-changeBlackBoard="setBlackboardData" />
    </div>
  </transition>
</template>
<script>
import Blackboard from '../../../components/blackboard/index';
import VueList from '../../../components/vue-list/index';
import mockApi from '@/mockService/mockApi';

export default {
  components: {
    Blackboard,
    VueList,
  },
  data () {
    return {
      basisData: {
        title: '',
        content: '',
      },
      list: [],
    }
  },
  created () {
    this.getVueList();
  },
  methods: {
    getVueList () {
      mockApi.getVueList()
        .then(({ data, status }) => {
          if (!status) {
            // showToast('呀，出错啦！');
          }
          this.list = [...data.data];
          this.setBlackboardData(this.list[0]);
        })
        .catch((err) => {
          console.log(err);
          // showToast(err);
        });
    },
    setBlackboardData (obj) {
      Object.assign(this.basisData, obj)
    }
  },
}
</script>
<style lang="scss">
@import "@/styles/compass.scss";
@import "@/styles/animate.scss";
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
.vue-basis {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: px2rem(25px);
    line-height: px2rem(25px);
    text-align: center;
    background-color: #afdfe4;
    color: white;
  }
}
</style>
