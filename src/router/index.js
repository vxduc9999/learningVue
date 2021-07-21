import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import ListDetails from "@/components/ListDetails/ListDetails.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "list/:listId",
        name: "ListDetails",
        component: ListDetails,
        props: (route) => {
          const allTasks = store.tasksData.filter(
            (task) => task.id_list === route.params.listId
          );

          const listExists = store.listsData.find(
            (list) => list.id === route.params.listId
          );

          const listName = listExists?.name;

          const selected = listExists?.id;

          return {
            listName,
            allTasks,
            selected,
          };
        },
        beforeEnter: (to, from, next) => {
          // fetching list data goes here
          const listsData = store.getAllLists();
          // check if list id exist in lists data
          const exists = listsData.find((list) => list.id === to.params.listId);

          return exists ? next() : next({ name: "PageNotFound" });
        },
      },
      {
        path: "all",
        name: "AllLists",
        component: ListDetails,
        props: {
          listName: "All",
          allTasks: store.getAllTasks(),
          selected: "All",
        },
      },
      {
        path: "completed",
        name: "Completed",
        component: ListDetails,
        props: () => {
          const allTasksCompleted = store.tasksData.filter(
            (task) => task.done === true
          );

          return {
            listName: "Completed",
            allTasks: allTasksCompleted,
            selected: "Completed",
          };
        },
      },
    ],
  },
  {
    path: "/404",
    alias: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
