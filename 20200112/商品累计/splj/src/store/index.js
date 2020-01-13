import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [{
        id: 1,
        price: 12.5,
        ptotal: 0,
        num: 0
      },
      {
        id: 2,
        price: 10.5,
        ptotal: 0,
        num: 0
      },
      {
        id: 3,
        price: 8.5,
        ptotal: 0,
        num: 0
      },
      {
        id: 4,
        price: 8.5,
        ptotal: 0,
        num: 0
      },
      {
        id: 5,
        price: 14.5,
        ptotal: 0,
        num: 0
      },
    ],
    alltotal: 0,
    allprice: 0,
    mostprice: 0

  },
  mutations: {
    dreduce(state, i) {
      state.data[i].ptotal--;
      state.data[i].ptotal < 0 ? state.data[i].ptotal = 0 : null;
      state.data[i].num = state.data[i].price * state.data[i].ptotal;
      let temp = '';
      state.data.forEach(item => {
        temp = temp * 1 + item.ptotal;
      })
      state.alltotal = temp;

      state.allprice = state.data.reduce((prev, now) => {
        return prev + now.num
      }, 0)



    },
    dadd(state, i) {
      state.data[i].ptotal++;
      state.data[i].num = state.data[i].price * state.data[i].ptotal;
      state.alltotal = state.data.reduce((prev, now) => {
        return prev + now.ptotal
      }, 0)
      state.allprice = state.data.reduce((prev, now) => {
        return prev + now.num
      }, 0)
     
         let most = state.data.map(item=>item.num);
         state.mostprice = Math.max(...most);
    },

  },
  actions: {},
  modules: {}
})