<template>
  <div class="search-container">
    <MovieItem
      v-for="(movie, index) in movieList"
      :key="index"
      :movieItem="movie"
    />
  </div>
</template>

<script>
  import { searchMovie } from "../api/movie";
  import MovieItem from "../components/MovieItem.vue";

  export default {
    components: { MovieItem },
    data() {
      return {
        page: 1,
        movieList: [],
      };
    },
    created: function () {
      this.getMovie();
    },
    methods: {
      getMovie: async function () {
        try {
          const text = this.$route.params.title;
          const page = this.page;

          const response = await searchMovie(text, page);
          this.movieList = response.data.results;
          console.log("list", response.data.results);
        } catch (e) {
          console.log(e);
        }
      },
    },
  };
</script>

<style scoped>
  .search-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 20%;
  }
</style>
