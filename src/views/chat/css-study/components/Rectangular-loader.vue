<template>
  <div class="rectangular">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.rectangular {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(1, 1, 1, 1);
  .loader {
    margin: auto;
    width: 150px;
    height: 150px;
    position: relative;
    span {
      position: absolute;
      box-sizing: border-box;
      border: 10px solid dimgray;
      border-radius: 1px;
      animation: rotating linear infinite;
    }
    span:nth-child(1) {
      width: 100%;
      height: 100%;
      animation-duration: 4s;
    }
    span:nth-child(2) {
      width: 70%;
      height: 70%;
      margin: 15%;
      animation-duration: 2s;
    }
    span:nth-child(3) {
      width: 40%;
      height: 40%;
      margin: 30%;
      animation-duration: 1s;
    }
    span::before,
    span::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 50%;
      background-color: yellow;
    }
    span::before {
      top: -10px;
      left: -10px;
    }
    span::after {
      bottom: -10px;
      right: -10px;
    }
    @keyframes rotating {
      to {
        transform: rotateY(360deg);
      }

      from {
        transform: rotateY(0deg);
      }
    }
  }
}
</style>
