<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- {{$store.state.num}}  -->
    <button >点我啊</button>
    <button>{{b}}</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters} from '../store/entry'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
//  ...mapGetters(['reverse']), 
...mapGetters({
  b:'b/reverse'
})
  // computed: {
  //   reverse(){
  //     // return this.$store.getters.reverse
          

  //   }
       
     
  // },
  // methods: {
  //   change(){
  //   // this.$store.commit('add')
  //   // this.$store.dispatch('asyncincrement') 
  //     //  this.$store.commit('reverse')
  //     //  console.log(this.$store.getters);
         
  //   },
  // },
  
}
</script>
