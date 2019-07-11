<template>
  <div class="blackboard">
    <div class="content">
      <div class="right">
        {{ data.title }}
      </div>
      <div class="left">{{ data.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({ title: '', content: '' }),
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
.blackboard {
  width: 100%;
  height: px2rem(216px);
  background: url("../../../../assets/vueimg/blackboard.jpg") no-repeat
    center/cover;
  position: relative;
}
.content {
  width: 80%;
  height: 70%;
  position: absolute;
  top: 15%;
  left: 10%;
}
.left {
  font-size: px2rem(10px);
  color: yellow;
}
.right {
  float: right;
  width: px2rem(60px);
  height: px2rem(50px);
  margin: px2rem(20px) px2rem(20px) 0 px2rem(1px);
  font-size: px2rem(12px);
}
</style>
