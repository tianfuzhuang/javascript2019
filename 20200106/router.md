### 单页SPA优点
   + 不刷新页面,在当前页切换多页的操作方式,能够提高用户体验 一些后端逻辑(工作)就可以分给前端来做,减少后端同学的压力,提高前端开发的业务能力 能够共用一些公关静态资源,减少http请求
   实现真正的全后端分离
   /---> home.vue
   /---> about.vue
   /---> public.vue

   安装路由:
   npm install vue-router
   或者
   yarn add vue-router

   找到main.js
   1.引包
   import VueRouter from 'vue-router'
   2.安装路由功能
   Vue.use(VueRouter)VueRouter;
   3.实例化VueRouter
   const router = new VueRouter({
       routes:[{
           path:'指定路径',
           component:指定路径响应的组件
       }]
   });

   4.挂路由
       默认配置时hash路由
       new Vue({
           mode:'history'
           router
       })
    5(*****).设置路由页面渲染的位置
    <router-view></router-view>


    6.<router-link>组件支持用户在具有路由功能的应用中点击导航。通过to属性指定目标地址，默认渲染为带有正确连接的<a>标签，可以通过配置tag属性生成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的css类名
```
     <router-link to="/" tag="li" class="haha">用户管理</router-link>
```