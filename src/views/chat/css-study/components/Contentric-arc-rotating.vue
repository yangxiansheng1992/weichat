<template>
  <div class="arc">
    <div class="circle"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.arc {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  .circle,
  .circle::before,
  .circle::after {
    border: 0.4em solid;
    border-radius: 50%;
    border-left-color: transparent;
    border-right-color: transparent;
  }
  .circle {
    width: 10em;
    height: 10em;
    border-top-color: red;
    border-bottom-color: blue;
    position: relative;
    animation: animate 4s ease-in-out infinite alternate;
  }
  .circle::before {
    content: "";
    width: 70%;
    height: 70%;
    top: 10%;
    left: 10%;
    position: absolute;
    border-top-color: orange;
    border-bottom-color: cyan;
    animation: animate 8s ease-in-out infinite alternate;
  }
  .circle::after {
    content: "";
    width: 40%;
    height: 40%;
    top: 25%;
    left: 25%;
    position: absolute;
    border-top-color: yellow;
    border-bottom-color: limegreen;
    animation: animate 16s ease-in-out infinite alternate;
  }
}

@keyframes animate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1440deg);
  }
}
</style>