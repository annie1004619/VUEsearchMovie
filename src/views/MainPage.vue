<template>
  <div class="container">
    <div class="title">The Movie</div>
    <SearchInput
      @onChangeText="onChangeText"
      @onChangeSelectedIndex="onChangeSelectedIndex"
      @onChangeShowSuggestion="onChangeShowSuggestion"
      @search="search"
      :lastIndex="lastIndex"
      :selectedIndex="selectedIndex"
    />
    <SuggestionList
      @onChangeSelectedIndex="onChangeSelectedIndex"
      @search="search"
      :suggestion="suggestion"
      :selectedIndex="selectedIndex"
      :showSuggestion="showSuggestion"
      :text="text"
    />
  </div>
</template>

<script>
  import SearchInput from "../components/SearchInput.vue";
  import SuggestionList from "../components/SuggestionList.vue";
  import { searchMovie } from "../api/movie";

  export default {
    components: { SearchInput, SuggestionList },
    data() {
      return {
        text: "",
        page: 1,
        suggestion: [],
        selectedIndex: 0,
        lastIndex: this.suggestion?.length - 1,
        showSuggestion: false,
        limit: 10,
      };
    },
    created: function () {
      this.getMovie();
    },
    watch: {
      text() {
        this.getMovie();
        this.selectedIndex = 0;
      },
      suggestion() {
        this.lastIndex = this.suggestion?.length - 1;
      },
    },
    methods: {
      onChangeText(value) {
        this.text = value;
      },
      getMovie: async function () {
        try {
          const text = this.text;
          const page = this.page;

          if (text.length === 0) {
            this.suggestion = [];
            return;
          }
          const response = await searchMovie(text, page);
          this.suggestion = response.data.results.slice(0, this.limit);
          this.showSuggestion = true;
        } catch (e) {
          console.log(e);
        }
      },
      onChangeSelectedIndex(index) {
        this.selectedIndex = index;
      },
      onChangeShowSuggestion(state) {
        this.showSuggestion = state;
      },
      search() {
        const searchUrl = this.suggestion[this.selectedIndex].title;
        this.$router.push(`/search/${searchUrl}`);
      },
    },
  };
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
    width: 700px;
  }
  .title {
    font-size: 3rem;
  }
</style>
