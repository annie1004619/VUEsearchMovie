<template>
  <div class="container">
    <div class="title">The Movie</div>
    <SearchInput
      @onChangeText="onChangeText"
      @onChangeSelectedIndex="onChangeSelectedIndex"
      :limit="limit"
      :selectedIndex="selectedIndex"
    />
    <SuggestionList
      :suggestion="suggestion"
      :selectedIndex="selectedIndex"
      @onChangeSelectedIndex="onChangeSelectedIndex"
    />
    {{ selectedIndex }}
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
      limit: 10,
    };
  },
  created: function () {
    this.search();
  },
  watch: {
    text() {
      this.search();
    },
  },
  methods: {
    onChangeText(value) {
      this.text = value;
    },
    search: async function () {
      try {
        const text = this.text;
        const page = this.page;

        if (text.length === 0) {
          this.suggestion = [];
          return;
        }
        const response = await searchMovie(text, page);
        this.suggestion = response.data.results.slice(0, this.limit);
      } catch (e) {
        console.log(e);
      }
    },
    onChangeSelectedIndex(index) {
      this.selectedIndex = index;
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
