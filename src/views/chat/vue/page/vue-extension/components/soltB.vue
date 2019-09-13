<template>
  <div class="slot-b">
    <slot :usertext="user.firstName" test="测试插槽">
      <p>
        测试插槽
      </p>
    </slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        firstName: "我是插槽传递的值",
        lastName: "Jun"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>