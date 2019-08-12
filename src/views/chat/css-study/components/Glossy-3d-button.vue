<template>
  <div class="box">
    <div class="btn">
      BUTTON
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    background: linear-gradient(to right, gold, darkorange);
    color: white;
    --width: 250px;
    --height: calc(var(--width) / 3);
    width: var(--width);
    height: var(--height);
    font-size: calc(var(--height/2.5));
    line-height: var(--height);
    letter-spacing: 0.2em;
    border: 1px solid darkorange;
    border-radius: 2em;
    text-align: center;
    text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 0 0 5px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    transform: perspective(500px) rotateY(-15deg);
    transition: 0.5s;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, transparent, white, transparent);
      left: -100%;
      transition: 0.5s;
    }
    &:hover {
      transform: perspective(500px) rotateY(15deg);
    }
    &:hover::before {
      left: 100%;
    }
  }
}
</style>