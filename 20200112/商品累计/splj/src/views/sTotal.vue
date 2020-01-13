<template>
  <div>
    <span>
      单价：
      <strong>10.5元</strong> 小计：
      <strong>0元</strong>
    </span>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['data'])
  },
};
</script>

<style scoped>
</style>