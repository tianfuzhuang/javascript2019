<template>
  <div>
    主页
    <button @click="cc1">点我</button>
  </div>
</template>

<script>
import { isloginFn } from "../../api/interceptors";
export default {
  methods: {
    cc1(){
       this.$router.push('/login')
    }
  },
  created() {
    isloginFn().then(({ data }) => {
      if( parseFloat(data.code)===2){
        //失效
        this.$router.push('/login')
      }else if(parseFloat(data.code)===1){
        //未登录
       this.$router.push('/login')

      }
    });
  }
};
</script>

<style scoped>
</style>