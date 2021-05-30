<template>
  <div class="tag">
    <div class="list">
      <div
        v-for="(language, index) in languages"
        v-bind:key="index"
        @click="language.selected = !language.selected"
        v-bind:class="{ selected: language.selected }"
      >
        <span>{{ language.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tag",
  props: {},
  data() {
    return {
      languages: [
        { name: "PHP", selected: false },
        { name: "C++", selected: false },
        { name: "Javascript", selected: false },
        { name: "CSS", selected: false },
        { name: "Nodejs", selected: false },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list div {
  display: inline-block;
  border: 1px solid;
  padding: 4px 15px;
  margin-right: 5px;
  border-radius: 4px;
}

.list div.selected {
  background-color: green;
  color: white;
}
</style>
