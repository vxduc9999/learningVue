<template>
  <div class="list-length">
    <div class="task" v-for="task in tasks" :key="task.id">
      <div class="check-content">
        <input class="form_input" id="task" type="checkbox" />
        <div class="input" @dblclick="task.editing = !task.editing">
          <span v-if="!task.editing" class="form_label">{{
            task.content
          }}</span>
          <textarea
            maxlength="250"
            class="form_input_editing"
            type="text"
            placeholder="Add a task"
            v-if="task.editing"
            :value="task.content"
            @input="resize(e)"
          ></textarea>
        </div>
      </div>
      <div class="feature-task">
        <i
          class="material-icons button-important"
          id="icons"
          @click="taskImportant(task.id)"
        >
          star_rate
        </i>
        <i class="material-icons button-important">
          delete
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    resize(e) {
      (e.target.style.height = "auto"),
        (e.target.style.height = `${e.target.scrollHeight}px`);
    },
    taskImportant(id) {
      console.log(id);
      this.$emit("task-important", id);
    },
  },
  components: {},
};
</script>

<style scoped>
.list-length {
  margin: 10px 0 10px 15px;
  width: 100vh;
}

.task {
  display: flex;
  justify-content: space-between;
  width: 132vh;
  padding-top: 20px;
}

.check-content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: auto;
}

.input {
  width: 110vh;
  padding-left: 10px;
  padding-top: 2px;
}

.form_input {
  flex: 1;
}

.form_input_editing {
  flex: 1;
  width: 110vh;
  height: 50px;
}

.form_label {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}

.button-important {
  width: 40px;
  margin-top: 8px;
}
</style>
