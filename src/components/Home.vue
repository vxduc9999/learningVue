<template>
  <div class="nav">
    <div class="left_page">
      <div class="left-feature">
        <div class="search">
          <input class="search-button" type="text" placeholder="Search" />
        </div>

        <list-feature :lists="lists"></list-feature>

        <lists-of-tasks
          :lists="lists"
          @show-task-of-list="showTaskOfLists"
        ></lists-of-tasks>
      </div>

      <div class="add-list">
        <span>+</span>
        <p>Add List</p>
      </div>
    </div>

    <div class="column-layout" v-if="Object.keys(list).length !== 0">
      <div class="add-task" @click="addTask()">
        <span>+</span>
      </div>

      <!-- the header -->
      <the-header
        v-if="Object.keys(list).length !== 0"
        :headerList="list"
      ></the-header>
      <!-- tasks -->
      <todo-lists
        v-if="Object.keys(list).length !== 0"
        :tasks="list.tasks"
        @add-edit-task="addEditTask"
        @delete-task="deleteTask"
        @task-important="taskImportant"
      ></todo-lists>
    </div>
  </div>
</template>

<script>
import Tasks from "./Tasks.vue";
import ListFeature from "./ListFeature.vue";
import TheHeader from "./TheHeader.vue";
import Lists from "./Lists.vue";

export default {
  name: "Navigation",
  data() {
    return {
      list: {},
      lists: [
        {
          id: 1,
          name: "list 1",
          tasks: [
            {
              id: 0,
              content: "Di hoc",
              done: false,
              important: false,
              editing: false,
            },
            {
              id: 1,
              content: "Di lam",
              done: false,
              important: true,
              editing: false,
            },
          ],
        },
        {
          id: 2,
          name: "list 2",
          tasks: [
            {
              id: 0,
              content: "Di hoc",
              done: true,
              important: false,
              editing: false,
            },
            {
              id: 1,
              content: "Di lam",
              done: false,
              important: true,
              editing: false,
            },
            {
              id: 2,
              content: "Fix bug",
              done: false,
              important: false,
              editing: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    showTaskOfLists(idList) {
      this.list = this.lists.find((list) => list.id === idList);
    },
  },
  components: {
    "todo-lists": Tasks,
    "list-feature": ListFeature,
    "the-header": TheHeader,
    "lists-of-tasks": Lists,
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
}

.left_page {
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(182, 178, 178);
  width: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left-feature {
  display: flex;
  flex-direction: column;
  height: 50vh;
  margin-top: 30px;
}

.search {
  display: flex;
  justify-content: space-around;
}

.search-button {
  width: 300px;
  height: 20px;
}

.add-list {
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
}

.column-layout {
  display: flex;
  width: 1440px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.add-task {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 30px;
}

.add-task span {
  margin-right: 20px;
}
</style>
