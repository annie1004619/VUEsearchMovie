<template>
  <ul v-show="suggestion.length !== 0">
    <li v-for="(item,idx) in list" :key="idx">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  props:{
    suggestion: Array
  },
  data(){
    return{
      list: this.$props.suggestion
    }
  },
  watch:{
    suggestion(){
      this.list = this.$props.suggestion
    }
  }
}
</script>

<style scoped>
ul {
  border: 1px solid #c4c4c4;
  list-style: none;
  width: 100%;
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 20px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
}
li{
  line-height: 50px;
  padding: 0 100px;
  height: 50px;
}
li:hover{
  background:#f3f3f3;
}
</style>