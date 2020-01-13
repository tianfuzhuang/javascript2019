<template>
    <div>
<div class="info">
					<span>商品公合计：<em>{{alltotal}}</em>件</span>
					<span>共花费了：<em>{{allprice}}</em>元</span>
					<br />
					<br />
					<span>其中最贵的商品单价是：<em>{{mostprice}}</em>元</span>
				</div>
    </div>
</template>

<script>
 import {mapMutations,mapState} from 'vuex'
    export default {
        computed: {
            ...mapState(['alltotal','allprice','mostprice'])
        },
        // methods: {
        //     ...mapMutations(['dgj']),
        //      gj(){
        //         this.dgj();
        //     }
        // },
    }
</script>

<style scoped>

</style>