<template>
  <div class="toggle-box">
    <input
      type="checkbox"
      class="toggle"
      :checked="ischecked"
      @click="changeChecked"
    />
    <div class="switch">
      <div class="inner">
        <div class="disc"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ischecked: true,
    }
  },
  methods: {
    changeChecked () {
      this.ischecked = !this.ischecked;
    }
  }

}
</script>
<style lang="scss" scoped>
.toggle-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkseagreen;
  font-size: 20px;

  .toggle {
    position: absolute;
    width: 10em;
    height: 5em;
    cursor: pointer;
    z-index: 2;
    /* filter: opacity(0); */
    opacity: 0;
    margin: 0;
  }

  .switch {
    position: absolute;
    width: 10em;
    height: 5em;
    background: linear-gradient(silver, whitesmoke);
    border-radius: 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner {
      width: 8em;
      height: 3.5em;
      background: linear-gradient(dimgray, silver);
      border-radius: 2em;
      box-shadow: inset 0 0 1.5em rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;

      .disc {
        width: 3.5em;
        height: 3.5em;
        background: linear-gradient(to top, silver, whitesmoke);
        border-radius: 50%;
        box-shadow: 0 0.4em 0.6em rgba(0, 0, 0, 0.2);
        position: relative;
        left: -30%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
      }

      .disc::before {
        content: "OFF";
        position: absolute;
        width: 80%;
        height: 80%;
        background: linear-gradient(silver, whitesmoke);
        border-radius: 50%;
        text-align: center;
        line-height: calc(3.5em * 0.8);
        font-family: sans-serif;
        color: gray;
      }
    }
  }

  .toggle:checked + .switch .inner {
    background: linear-gradient(green, limegreen);
  }

  .toggle:checked + .switch .inner .disc {
    left: 30%;
  }

  .toggle:checked ~ .switch .inner .disc::before {
    content: "ON";
    color: limegreen;
  }

  /* 
  难点。再两个选择器的使用：+ ~
    +；相邻选择器，它值指挥选中指定元素的直接后继元素，且是第一个元素；
    ~：这个叫兄弟节点选择器，跟+相邻选择器很类似，但是，+相邻选择器指挥选中紧挨着指定的元素，而这个选择器会匹配在目标元素后面的所有匹配元素
    扩展：
      a[href="http://strongme.cn"]:这个中括号是属性选择器，比如例子中的当href变为指定值时就发生变化，当然，这样写比较死，可以写成正则的方式，进行匹配；其他的例子：p[color='red'];
      X:not(selector):例子：div:not(#box){color:blue};这个选择器:not叫取反，比如例子里面我么要把除id为box之外的所有div都选中变化，那么:not就可以做到。
   */
}
</style>