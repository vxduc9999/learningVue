<template>
  <div class="header">
    <h2 class="title">{{ headerList.name }}</h2>
    <h2 class="count-of-list">{{ headerList.tasks.length }}</h2>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  props: {
    headerList: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 40px;
}

.count-of-list {
  margin-right: 18px;
}

.add-task span {
  margin-right: 20px;
}

.title {
  margin-left: 20px;
}
</style>
