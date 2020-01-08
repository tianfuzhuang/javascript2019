import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  // {
  //   path: '/about/:id',
  //   name: 'about',
  //   component: () => import('../views/h1.vue')
  // },
  // {
  //   path: '/dong',
  //   name: 'dong',
  //   component: () => import('../views/dong.vue')
  // },
  {
    path: '/dong/:id',
    component: () => import('../views/dong.vue')
  },
  {
    path: '/cc/:name1/id/:id',
    component: () => import('../views/cc.vue')
  },
  {
    path:'*',
    // name:404,
    component:() => import('../views/404/404.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
