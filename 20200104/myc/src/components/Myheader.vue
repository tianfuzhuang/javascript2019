<template>
    <div>
       <header class="header" >
                <h1>todos</h1>
                <input 
                    class="new-todo" 
                    placeholder="请输入内容"
                    @keyup.enter="cadd"
                    v-model="num"
                >
            </header>
    </div>
</template>

<script>
    export default {
       data(){
           return {
                 num:''
           }
       },
       methods: {
           cadd(){
               this.$emit('cadd',this.num);
               this.num=''
           }
       },
    }
</script>

<style lang="scss" scoped>

</style>