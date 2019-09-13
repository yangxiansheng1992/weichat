<template>
  <div class="slot-a">
    <div>
      <div class="head">
        <slot name="head"></slot>
      </div>

      <main>
        <slot></slot>
      </main>

      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.slot-a {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid;
  .head {
    height: 30px;
    background-color: antiquewhite;
  }
  main {
    height: 40px;
    background-color: red;
  }
  footer {
    height: 30px;
    background-color: pink;
  }
}
</style>