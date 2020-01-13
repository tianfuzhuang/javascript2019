import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0,
    val:'aaa'
  },
  mutations: {
    add(state){
      state.num++
    }
  },
  actions: {
    asyncincrement(context){
      setTimeout(function(){        
         context.commit('add')
      },2000)
     
    }
  },
  getters:{
    reverse(state){
    return state.val+'哈哈11111'
    }
  },
  modules: {
  }
})
