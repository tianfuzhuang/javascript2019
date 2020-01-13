import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import index1 from './index1'
import index2 from './index2'

export default new Vuex.Store({
    mudules:{
        a:index1,
        b:index2
    }
})