<template>
  <div class="list-details" v-if="listName && allTasks">
    <AddTaskButton />
    <ListSummary :listName="listName" :countAllTasks="allTasks.length" />
    <ListTasks :allTasks="allTasks" />
  </div>
</template>

<script>
import AddTaskButton from "./AddTaskButton.vue";
import ListSummary from "./ListSummary.vue";
import ListTasks from "./ListTasks.vue";
export default {
  name: "ListDetails",
  components: {
    AddTaskButton,
    ListSummary,
    ListTasks,
  },
  props: {
    listName: {
      type: String,
    },
    allTasks: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.list-details {
  width: 70%;
}
</style>
