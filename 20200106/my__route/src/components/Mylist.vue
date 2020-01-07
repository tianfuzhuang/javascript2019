<template>
   <ul class="navlist">
        <router-link to="/" tag="li" class="haha">用户管理</router-link>
        <router-link to="/Myorder" tag="li">订单管理</router-link>
        <router-link to="/Myai" tag="li">智能调度</router-link>
        <router-link to="/Mycar" tag="li">车辆管理</router-link>
      </ul>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navlist{
    flex-direction: column;
    display: flex;
    font-size: 20px;
    align-items: center;
    padding:20px 20px;
}
.navlist li{
    width: 80%;
    height: 50px;
}
</style>