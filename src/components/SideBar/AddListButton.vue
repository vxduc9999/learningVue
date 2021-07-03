<template>
  <button class="button" @click="addList">
    <i class="add-list-icon material-icons"> add_circle_outline </i>
    <span>Add List</span>
  </button>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "AddListButton",
  computed: {
    listsData() {
      return this.$store.listsData;
    },
  },
  methods: {
    addList() {
      const newListId = nanoid();
      const countLists = this.listsData.length;
      this.$store.listsData.push({
        id: newListId,
        name: `New list (${countLists + 1})`,
      });
      this.$store.editting.listId = newListId;
    },
  },
};
</script>

<style scoped>
.add-list-icon {
  font-size: 18px;
  margin-right: 5px;
}

.button {
  border: none;
  background: none;
  font-size: 18px;
  padding: 5px 0 0 10px;
  display: flex;
  align-items: center;
}
</style>
