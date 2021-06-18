<template>
  <div class="list-details">
    <AddTaskButton />
    <ListSummary />
    <ListTasks />
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
};
</script>

<style scoped>
.list-details {
  width: 70%;
}
</style>
