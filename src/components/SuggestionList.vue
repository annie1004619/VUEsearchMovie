<template>
  <ul v-show="suggestion.length !== 0">
    <li
      v-for="(item, index) in list"
      :key="index"
      :class="{ 'selected-item': selectedIndex === index }"
      @mousedown="onChangeSelectedIndex(index)"
    >
      <div></div>
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    suggestion: Array,
    selectedIndex: Number,
  },
  data() {
    return {
      list: this.$props.suggestion,
    };
  },
  watch: {
    suggestion() {
      this.list = this.$props.suggestion;
    },
  },
  methods: {
    onChangeSelectedIndex(index) {
      this.$emit("onChangeSelectedIndex", index);
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
</style>
