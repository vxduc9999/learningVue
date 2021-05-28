<template>
  <div class="todo">
    <div class="seach-box">
      <input
        type="text"
        placeholder="Add Task..."
        v-model="query"
        @keyup.enter="addTask"
      />
    </div>
    <h1>Todos</h1>
    <div v-for="task in tasks" v-bind:key="task.id + 'F'">
      <Task
        v-if="task.done === false"
        v-bind:taskData="task"
        v-on:done-todo="completeTodo"
        v-on:delete-todo="deleteTodo"
      />
    </div>

    <h1>Complete</h1>
    <div v-for="task in tasks" v-bind:key="task.id + 'T'">
      <Task
        v-if="task.done === true"
        v-bind:taskData="task"
        v-on:undone-todo="uncompleteTodo"
        v-on:delete-todo="deleteTodo"
      />
    </div>
  </div>
</template>

<script>
import Task from "../components/task";

export default {
  name: "todo",
  data() {
    return {
      query: "",
      tasks: [
        { id: 1, content: "React story", done: false },
        { id: 2, content: "Nhan tin ", done: false },
        { id: 3, content: "Di choi", done: false },
      ],
    };
  },
  methods: {
    addTask() {
      const tt = Math.max.apply(
        Math,
        this.tasks.map(function(o) {
          return o.id;
        })
      );
      this.tasks.push({ id: tt + 1, content: this.query, done: false });
      this.query = "";
    },
    deleteTodo(todoId) {
      this.tasks = this.tasks.filter((todo) => todo.id !== todoId);
    },
    completeTodo(todoId) {
      let ii = this.tasks.filter((todo) => todo.id === todoId);
      ii[0].done = true;

      var foundIndex = this.tasks.findIndex((x) => x.id == todoId);
      this.tasks[foundIndex] = ii[0];
    },
    uncompleteTodo(todoId) {
      let ii = this.tasks.filter((todo) => todo.id === todoId);
      ii[0].done = false;

      var foundIndex = this.tasks.findIndex((x) => x.id == todoId);
      this.tasks[foundIndex] = ii[0];
    },
  },
  components: {
    Task,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
}
</style>
