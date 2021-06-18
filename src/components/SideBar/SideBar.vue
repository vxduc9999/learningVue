<template>
  <div class="side-bar">
    <SearchTask />
    <FeaturedLists />
    <PersonalLists />
    <AddListButton />
  </div>
</template>

<script>
import SearchTask from "./SeachTask.vue";
import FeaturedLists from "./FeaturedLists.vue";
import PersonalLists from "./PersonalLists.vue";
import AddListButton from "./AddListButton.vue";
export default {
  name: "SideBar",
  components: {
    SearchTask,
    FeaturedLists,
    PersonalLists,
    AddListButton,
  },
};
</script>

<style scoped>
.side-bar {
  background-color: rgb(192, 187, 187);
  width: 30%;
  padding: 10px 0 0 10px;
}
</style>
