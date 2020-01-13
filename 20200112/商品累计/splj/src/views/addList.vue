<template>
    <div>
     	<ul class="list">
					<li 
                    v-for="(val,key)
                     in data" :key="key"
                     >
						<i 
                        @click="reduce(key)"
                        ></i>
						<em>{{val.ptotal}}</em>
						<i
                        @click="dadd(key)"
                        ></i>
                        <span>
							单价：<strong>{{val.price}}  元 </strong> 小计：<strong>{{val.num}}</strong>
						</span>
						<!-- <sTotal/> -->
					</li>
			
				</ul>
    </div>
</template>

<script>
import sTotal from './sTotal.vue'
import {mapMutations,mapState} from 'vuex'
    export default {
        methods: {
          ...mapMutations(['dreduce']),
          ...mapMutations(['dadd']),
       
            reduce(i){
              this.dreduce(i); 
            },
            add(i){
              this.dadd(i); 
            },
           
        },
        components:{
          sTotal
        },
        computed: {
         ...mapState(['data'])
        },
        data(){
            return{
       
            }
        }
    }
</script>

<style scoped>

</style>