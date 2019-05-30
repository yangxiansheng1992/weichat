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
        <a class="hint" @click="redirect('/register')">没有帐号？立即注册</a>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    redirect (path) {
      this.$router.push(path);
    },
    login () {

    },
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
