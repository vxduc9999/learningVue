<template>
  <div class="list-task-detail">
    <div class="list-task-detail-left">
      <input type="checkbox" :checked="task.done" />
      <p :class="{ 'task-content': true, 'task-completed': task.done }">
        {{ task.content }}
      </p>
    </div>
    <div class="list-task-detail-right">
      <select :disabled="task.done">
        <option
          v-for="priority in priorities"
          :key="priority.id"
          :value="priority.name"
          :selected="priority.id === task.priority"
        >
          {{ priority.name }}
        </option>
      </select>
      <i class="delete-task-icon material-icons">
        delete
      </i>
    </div>
  </div>
</template>

<script>
import { priorities } from "@/data";
export default {
  name: "ListTask",
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      priorities,
    };
  },
};
</script>

<style scoped>
.list-task-detail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-right: 5px;
  padding-left: 5px;
}

.list-task-detail-left {
  display: flex;
  width: 80%;
}

.task-content {
  margin-left: 10px;
  margin-top: 3px;
  width: 100%;
  white-space: normal;
  line-height: 1.4;
}

input {
  margin: auto;
  width: 20px;
  height: 30px;
}

.list-task-detail-right {
  justify-content: flex-end;
  display: flex;
}

select {
  height: 25px;
  margin: auto;
  margin-right: 15px;
}

.delete-task-icon {
  margin: auto;
}

.task-completed {
  text-decoration-line: line-through;
}
</style>
