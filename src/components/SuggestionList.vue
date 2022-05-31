<template>
  <ul v-show="text.length !== 0 && showSuggestion">
    <li
      v-for="(item, index) in list"
      :key="index"
      :class="{ 'selected-item': selectedIndex === index }"
      @mousedown="onClickTitle(index)"
    >
      <div class="focus-line"></div>
      {{ item.title }}
    </li>
    <li v-show="list.length === 0" class="notice-text">
      There's no movie you searched for
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      suggestion: Array,
      selectedIndex: Number,
      showSuggestion: Boolean,
      text: String,
    },
    data() {
      return {
        list: this.$props.suggestion,
        show: this.$props.showSuggestion,
      };
    },
    watch: {
      suggestion() {
        this.list = this.$props.suggestion;
        this.show = this.$props.showSuggestion;
      },
    },
    methods: {
      onClickTitle(index) {
        this.$emit("onChangeSelectedIndex", index);
        this.$emit("search");
      },
    },
  };
</script>

<style scoped>
  ul {
    border: 1px solid #c4c4c4;
    list-style: none;
    width: 100%;
    margin: 20px 0;
    padding: 20px 0;
    border-radius: 20px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }
  li {
    line-height: 50px;
    height: 50px;
    display: flex;
  }
  li:hover {
    background: #f3f3f3;
  }
  li div {
    width: 5px;
    height: 100%;
    margin-right: 45px;
  }
  .selected-item {
    background: #f3f3f3;
  }
  .selected-item div {
    background: rgb(26, 115, 232);
    width: 5px;
    height: 100%;
    border-radius: 0 3px 3px 0;
  }
  .notice-text {
    justify-content: center;
  }
</style>
