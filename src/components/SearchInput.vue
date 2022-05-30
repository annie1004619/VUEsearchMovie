<template>
  <div class="input-container">
      <input type="text" v-model="text" placeholder="Search the title of the movie" />
    </div>
</template>

<script>
console.log(document.activeElement.id);

export default {
 data(){
   return{
     text:'',
   }
 },
 watch:{
   text(){
     this.onChangeText()
   },

 },
 methods:{
   onChangeText(){
     this.$emit("onChangeText",this.text)
   }
 }
}
</script>

<style scoped>
.input-container{
  margin-top: 50px;
  display: flex;
  height: 60px;
  width: 100%;
  border: 1px solid #c4c4c4;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  align-items: center;
  border-radius: 30px;
  justify-content: space-around;
}

.input-container:focus {
    border: 1px solid red;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0, 98, 65, 0.2);
  }
input{
    width:80%;
    height: 55px;
    border: none;
    background: inherit;
    font-size: 1rem;
}
input:focus{
        border: none;
        outline: none;
      }

input:hover {
        border: none;
        outline: none;
      }
</style>