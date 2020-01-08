<template>
    <div>
 
   <h1>我是H1</h1>
    <router-link to="/dong/1" tag="button">点我1</router-link>
    <router-link to="/dong/2" tag="button">点我2</router-link>

   <h2 v-if="$route.params.id==1">我是{{$route.params}}:欢迎大哥回来</h2>
   <h2 v-if="$route.params.id==2">我是{{}}:来了老弟</h2>


    </div>
</template>

<script>
    export default {
       
    }
</script>

<style scoped>

</style>