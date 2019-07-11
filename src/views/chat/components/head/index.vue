<template>
  <header>
    <div class="icon" @click="toChat">
      <font-awesome-icon icon="angle-left" />
    </div>
    <div class="input">
      <mt-search
        v-model="value"
        cancel-text="搜索"
        @change.native="search"
      ></mt-search>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      value: '',
    }
  },
  methods: {
    toChat () {
      this.$router.push('/chat');
    },
    search (e) {
      console.log(e.target.value);
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/compass.scss";
header {
  background-color: #1e2b39;
  width: 100%;
  height: px2rem(50px);
  line-height: px2rem(50px);
  overflow: hidden;
  .icon {
    width: px2rem(50px);
    height: px2rem(50px);
    color: #fffffb;
    text-align: center;
    line-height: px2rem(50px);
    float: left;
  }
  .input {
    float: left;
    @include prefixer-value(width, calc(100% - 3.125rem), webkit moz o ms);
    height: px2rem(50px);
    /deep/.mint-search {
      .mint-searchbar {
        background-color: #1e2b39;
      }
    }
  }
}
</style>
