<template>
  <div class="movie-card-container">
    <div class="image-wrapper">
      <img src="imageSrc" />
    </div>
    <div>{{ movie.title }}</div>
  </div>
</template>

<script>
  import noImage from "../assets/noImage.png";

  export default {
    props: {
      movieItem: {
        type: Object,
        default: () => {
          return {
            adult: false,
            backdrop_path: "",
            genre_ids: (2)[(35, 18)],
            id: 0,
            original_language: "en",
            original_title: "",
            overview: "",
            popularity: 0,
            poster_path: "",
            release_date: "0000-00-00",
            title: "",
            video: false,
            vote_average: 0,
            vote_count: 0,
          };
        },
      },
    },
    data() {
      return {
        movie: this.$props.movieItem,
        imageSrc: this.movie?.backdrop_path
          ? `http://image.tmdb.org/t/p/original/${this.movie?.backdrop_path}`
          : noImage,
      };
    },
    watch: {
      movieItem() {
        this.movie = this.$props.movieItem;
        this.imageSrc = this.movie?.backdrop_path
          ? `http://image.tmdb.org/t/p/original/${this.movie?.backdrop_path}`
          : noImage;
      },
    },
  };
</script>

<style scoped>
  .movie-card-container {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    width: 300px;
    margin: 20px auto;
  }
  .image-wrapper {
    width: 300px;
    height: 300px;
  }
  img {
    width: 100%;
  }
</style>
