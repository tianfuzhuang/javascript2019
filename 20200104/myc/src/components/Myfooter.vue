<template>
     <footer class="footer">
                <span class="todo-count">
                    <strong>{{cwxz}}</strong>
                    <span>条未选中</span>
                </span>
                <ul class="filters">
                    <li v-for="(ele, i) in btns" :key="i">
                        <a :href="ele.src" :class="{selected:ele.istrue}" @click="sele(i,ele.btntxt)">{{ele.btntxt}}</a>
                    </li>
                </ul>
            </footer>
</template>

<script>
    export default {
        props:['cwxz']
        ,
        data(){
            return{
                val1:'',
                btns: [{
                        src: "#/all",
                        btntxt: "全部",
                        istrue: true,
                    },
                    {
                        src: '#/unchecked',
                        btntxt: "未选中",
                        istrue: false,
                    },
                    {
                        src: "#/checked",
                        btntxt: "已选中",
                        istrue: false,
                    },
                ] 
            }
        },
        methods: {
            sele(i,text){
                this.val1 = this.btns[i].btntxt;
                    this.btns.forEach((ele) => {
                        ele.istrue = false
                    })
                    this.btns[i].istrue = true;
                this.$emit('cfn',text)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>