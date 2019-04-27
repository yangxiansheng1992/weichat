/* eslint-disable no-unused-vars */
<template>
  <transition name="slide">
    <section class="login">
      <mt-header fixed class="header">
        <router-link slot="left" to="/">
          <mt-button class="back-btn" icon="back">取消</mt-button>
        </router-link>
      </mt-header>
      <div class="blank"/>
      <div class="content">
        <div class="inputs">
          <mt-field v-model="username" label="帐 号" placeholder="请填写帐号"/>
          <mt-field v-model="password" label="密 码" type="password" placeholder="请填写密码"/>
        </div>
      </div>
      <div class="container">
        <mt-button class="login-btn" type="default" @click="login">登入</mt-button>
      </div>
      <div class="footer">
        <a class="hint" @click="redirect('/register')">没有帐号？立即注册</a>
      </div>
    </section>
  </transition>
</template>

<script>
import {
  Field,
  Header as MintHeader,
  Button as MintButton,
  Indicator,
} from 'mint-ui';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    redirect(path) {
      this.$router.push(path);
    },
    login() {

    },
  },
};
</script>

<style scoped lang="scss">
  .login {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: white;

    .header {
      background-color: transparent;

      .back-btn {
        color: #0bb607;
      }
    }

    .blank {
      height: 40px;
    }

    .container {
      text-align: center;

      .login-btn {
        margin-top: 2rem;
        background-color: #0bb607;
        color: white;
        width: 90%;
      }
    }

    .content {
      margin-top: 1rem;
      text-align: center;
      width: 100%;

      .inputs {
        display: inline-block;
        text-align: left;
        width: 90%;
      }
    }

    .footer {
      display: inline-block;
      text-align: center;
      width: 100%;

      .hint {
        width: 90%;
        margin-top: 2rem;
        font-size: 12px;
        color: #5f5f5f;
        text-align: left;
        display: inline-block;
      }
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
<style>
  /*複寫讀取mask的z-index*/
  .mint-indicator-wrapper {
    z-index: 2;
  }

  .mint-indicator-mask {
    z-index: 2;
  }
</style>
