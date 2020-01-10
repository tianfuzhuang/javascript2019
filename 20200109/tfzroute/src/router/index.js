import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  //==>默认主页home
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //==>注册页面
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue')
  },
  //==>登录页面
  {
    path: '/login',
    name: 'login',
    meta:{reg:true},
    component: () => import('../views/login/login.vue')
  },
  //==>404页面
  {
    path:"*",
    component: () => import('../views/404/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
//引入isloginFn
import { isloginFn } from "../../api/interceptors";
router.beforeEach(async (to,from,next)=>{
  //在每次切换路由的时候，切换过去的路由需不需要验证，如果需要
  
  const b = to.matched.some(item=>item.meta.reg);
 
  if(b){
    //需要验证
    let flg = await isloginFn(); //需要就请求验证接口
    //校验成功
    let bool=flg.data.code
    if(bool==0){
      next();
    }else{
      //校验失败
      next('/login');
    }

  }else{
    //不需要验证，该跳跳你的
    next();
  }
  // console.log(to.matched)
 
})








export default router