<template>
  <div class="container">
    <div class="title">The Movie</div>
    <SearchInput @onChangeText="onChangeText"/>
    <SuggestionList :suggestion="suggestion"/>
    <div>{{text}}</div>
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput.vue'
import SuggestionList from '../components/SuggestionList.vue'
import {searchMovie} from '../api/movie'

export default {
  components :{SearchInput,SuggestionList},
  data(){
    return{
      text:'',
      page:1,
      suggestion:[]
    }
  },
  created: function(){
    this.search()
  },
  watch:{
    text(){
    this.search()
    }
  },
  methods:{
    onChangeText(value){
      this.text=value
    },
    search: async function(){
      try{
        const text = this.text
        const page = this.page

        if (text.length === 0) {
          this.suggestion = []
          return
        }
        const response = await searchMovie(text,page)
        console.log(response.data.results.slice(0,10))
        this.suggestion = response.data.results.slice(0,10)
      }
      catch(e){
        console.log(e)
      }
     
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 30%;
}
.title{
  font-size: 3rem;
}
</style>