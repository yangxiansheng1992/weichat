<template>
  <div class="vue-list">
    <div class="list">
      <div
        class="list-item"
        v-for="item in list"
        :key="item.title"
        @click="changeBlackBoard(item)"
      >
        <span>{{ item.id }}</span>
        <p>{{ item.title }}</p>
        <a :href="item.linkPage">去看看</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeBlackBoard (data) {
      this.$emit("on-changeBlackBoard", data);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
.vue-list {
  width: 100%;
  @include prefixer-value(height, calc(100% - 15.0625rem), webkit moz o ms);
  overflow: auto;
  .list {
    display: flex;
    flex-direction: column;
    .list-item {
      width: 100%;
      height: px2rem(30px);
      background-color: #f6f5ec;
      display: flex;
      flex-direction: row;
      line-height: px2rem(30px);
      margin-top: px2rem(3px);
      span {
        padding: 0 px2rem(5px);
        color: violet;
        font-size: px2rem(8px);
      }
      a {
        padding: 0 px2rem(5px);
        text-decoration: none;
        color: red;
      }
      p {
        flex: 1;
        text-align: left;
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

