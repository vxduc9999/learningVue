<template>
  <div class="list-summary">
    <h2 class="list-name">{{ listName }}</h2>
    <h2>{{ countAllTasks }}</h2>
  </div>
</template>

<script>
export default {
  name: "ListSummary",
  props: {
    listName: {
      type: String,
    },
    countAllTasks: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.list-summary {
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-top: 15px;
  padding-right: 10px;
}

h2 {
  font-size: 40px;
  color: blue;
}

.list-name {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
