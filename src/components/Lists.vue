<template>
  <div class="list-item">
    <h2>My Lists</h2>
    <div class="lists" v-for="list in lists" :key="list.id">
      <div class="list" @click="showTaskOfList(list.id)">
        <div class="parent-of-list">
          <span class="material-icons" id="icon">
            list
          </span>
          <p class="name-of-list">{{ list.name }}</p>
        </div>
        <p class="count-of-list">{{ list.tasks.length }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lists",
  props: {
    lists: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    showTaskOfList(idOfList) {
      this.$emit("show-task-of-list", idOfList);
    },
  },
  data() {
    return {
      idList: 0,
    };
  },
};
</script>

<style scoped>
.list-item {
  margin-top: 30px;
  margin-left: 10px;
}

h2 {
  font-size: 30px;
}

.list {
  display: flex;
  justify-content: space-between;
  height: 40px;
}

.parent-of-list {
  margin-top: 10px;
  display: flex;
}

.name-of-list {
  padding-left: 10px;
  padding-top: 5px;
}

.count-of-list {
  padding-top: 12px;
}
</style>
