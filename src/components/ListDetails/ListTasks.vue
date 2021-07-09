<template>
  <div class="list-tasks">
    <ListTask v-for="task in allTasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import ListTask from "./ListTask.vue";
export default {
  name: "ListTasks",
  components: {
    ListTask,
  },
  props: {
    allTasks: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.list-tasks {
  height: 88%;
  margin-top: 20px;
  overflow: auto;
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: rgb(214, 210, 210, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(150, 150, 150);
  border-radius: 10px;
  border: 1px solid rgb(214, 210, 210, 0);
}
</style>
