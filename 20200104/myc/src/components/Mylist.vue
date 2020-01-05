<template>

  <ul class="todo-list">
    <li
      :class="{
        completed:val.checked,
        editing:myval==val
        }"
      v-for="(val,key) in cary"
      :key="val.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="val.checked" />
        <label @dblclick="replace(val,key)">{{val.txt}}</label>
        <button class="destroy" @click="rm(val.id)"></button>
      </div>
      <input
        
        :key="val.id"
        class="edit"
         ref="edit"
        :value="val.txt"
        @blur="boff(key,$event)"
        @keyup.esc="onoff_FN"
      />
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
export default {
  props: ["cary"],
  data() {
    return {
      myval: "",
      off: false
    };
  },
  methods: {
    rm(id) {
      this.$emit("dele", id);
    },
    replace(val, key) {
      this.myval = val;
      Vue.nextTick(() => {
        // DOM 更新了
        
        this.$refs.edit.forEach(element => {
            element.select() 
        }); //聚焦
      



      });
    },
    boff(key,ev) {
      if (this.off) {
        this.off = false;
        return;
      }
      console.log(ev.target.value);
      
      this.$emit("reval",ev.target.value,key);
      this.myval = "";
    },
    onoff_FN() {
      this.off = true;
      this.myval = "";
    }
  },
   


    // directives: {
    //   focus: {
    //     // 指令的定义
    //     inserted: function(el) {
    //       el.select();
    //     }
    //   }
    // }
};
</script>

<style lang="scss" scoped>
</style>