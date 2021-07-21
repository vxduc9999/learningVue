import { lists, tasks } from "@/data";

export default {
  listsData: [],
  tasksData: [],
  editting: {
    listId: null,
  },
  selected: null,
  getAllLists() {
    this.listsData = [...lists];
    return this.listsData;
  },
  getAllTasks() {
    this.tasksData = [...tasks];
    return this.tasksData;
  },
  countAllTasksByListId(listId) {
    return this.tasksData.filter((task) => task.id_list === listId).length;
  },
  editListName(listId, listName) {
    const index = this.listsData.findIndex((list) => list.id === listId);
    if (index === -1) {
      return false;
    }
    this.listsData[index].name = listName;
    this.editting.listId = null;
    return true;
  },
};
