<template>
  <div class="list-tasks">
    <div class="list-tasks-detail">
      <input type="checkbox" />
      <p>TaskName</p>
    </div>
    <div class="function-task">
      <select>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <span>icon_delete</span>
    </div>
  </div>
</template>

<style scoped>
.list-tasks {
  display: flex;
  justify-content: space-between;
}

.list-tasks-detail {
  display: flex;
  width: 100%;
}

.function-task {
  width: 20%;
}
</style>
