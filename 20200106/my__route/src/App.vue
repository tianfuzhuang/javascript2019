<template>
  <div class="content">
    <div class="header"></div>

    <div class="main_wrap">
      <!-- <ul class="navlist">
        <router-link to="/" tag="li" class="haha">用户管理</router-link>
        <router-link to="/Myorder" tag="li">订单管理</router-link>
        <router-link to="/Myai" tag="li">智能调度</router-link>
        <router-link to="/Mycar" tag="li">车辆管理</router-link>
      </ul> -->
      <Mylist/>
      <div class="mainBox">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
 import Mylist from './components/Mylist'

export default {
components:{
   Mylist
}

};
</script>

<style lang="scss" >
.content img{
  width:100%;
  height:530px;
}

.content {
  width: 100%;
  height: 100vh;
  background: lightgrey;
}
.content .header {
  width: 100%;
  height: 15%;
  background: salmon;
}
.content .main_wrap {
  width: 100%;
  height: 85%;
  background: greenyellow;
  display: flex;
}
.content .navlist {
  width: 20%;
  background: lightskyblue;
}
.content .mainBox {
  width: 80%;
  background: lightcyan;
}
</style>