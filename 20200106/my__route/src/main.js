import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

Vue.config.productionTip = false

//引入
import Myai from './components/Myai'
import Mycar from './components/Mycar'
import Myorder from './components/Myorder'
import Myuser from './components/Myuser'

const routes = [
  {
    path:'/',
    component:Myuser
  },
  {
    path:'/Myai',
    component:Myai
  },
  {
    path:'/Myorder',
    component:Myorder
  },
  {
    path:'/Mycar',
    component:Mycar
  },
];
const router = new VueRouter({
  mode:'history',
  routes
});





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
