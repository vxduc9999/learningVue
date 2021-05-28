<template>
  <div class="task">
    <div>
      <span>{{ taskData.content }} </span>
      <button
        v-if="taskData.done === false"
        @click="$emit('done-todo', taskData.id)"
      >
        Complete
      </button>
      <button
        v-if="taskData.done === true"
        @click="$emit('undone-todo', taskData.id)"
      >
        Uncomplete
      </button>
      <button @click="$emit('delete-todo', taskData.id)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    taskData: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
