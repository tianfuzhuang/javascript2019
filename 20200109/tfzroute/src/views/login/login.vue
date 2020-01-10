<template>
  <div class="wrap">
    <div>
      <span>登录账户</span>
      <input type="text" id="user" autocomplete="off" v-model="user" />
    </div>
    <div>
      <span>登录密码</span>
      <input type="password" id="pw" v-model="pass" />
    </div>
    <div>
      <button id="register">注册</button>
      <button id="login" @click="logFn">登录</button>
    </div>
  </div>
</template>

<script>
import { loginFn } from "../../../api/interceptors";

export default {
  data() {
    return {
      user: "",
      pass: ""
    };
  },
  methods: {
    logFn() {
      let userdata = {};
      userdata.user = this.user;
      userdata.pw = this.pass;
      loginFn(userdata).then(({ data }) => {
        if (parseFloat(data.code) === 0) {
            this.$router.push('/')
        }else{
          this.$router.push('/login')
        }
      });
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 300px;
  height: 100px;
  margin: 100px auto;
}
</style>