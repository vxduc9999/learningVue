import { lists, tasks } from "@/data";

export default {
  listsData: [],
  tasksData: [],
  getAllLists() {
    this.listsData = [...lists];
    return this.listsData;
  },
  getAllTasks() {
    this.tasksData = [...tasks];
    return this.tasksData;
  },
};
