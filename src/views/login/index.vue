/* eslint-disable no-unused-vars */
<template>
  <transition name="slide">
    <section class="login">
      <mt-header fixed class="header">
        <router-link slot="left" to="/">
          <mt-button class="back-btn" icon="back">取消</mt-button>
        </router-link>
      </mt-header>
      <div class="blank" />
      <div class="content">
        <div class="inputs">
          <mt-field v-model="username" label="帐 号" placeholder="请填写帐号" />
          <mt-field
            v-model="password"
            label="密 码"
            type="password"
            placeholder="请填写密码"
          />
        </div>
      </div>
      <div class="container">
        <mt-button class="login-btn" type="default" @click="login"
          >登入</mt-button
        >
      </div>
      <div class="footer">
        <a class="hint" @click="goWhere('/register')">没有帐号？立即注册</a>
      </div>
      <BackgroundAnimation
        bgColor="255,165,0"
        formRadian="20px"
        bgOpacity="0.2"
      />
    </section>
  </transition>
</template>

<script>
import BackgroundAnimation from '@/components/backgroundAnimation/index'
import UserStorage from '../../storage/user';
import RYtool from '../../rongcloud/ryTool';

export default {
  name: 'login',
  components: {
    BackgroundAnimation,
  },
  data () {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    goWhere (path) {
      this.$router.push(path);
    },
    login () {
      UserStorage.setUserInfo({
        user_id: this.username
      })
      this.goWhere('/chat');
      RYtool.rongCloudStart();
    },
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
