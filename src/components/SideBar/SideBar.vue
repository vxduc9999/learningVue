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
  background-color: rgba(230, 245, 247, 0.5);
  width: 30%;
  min-width: 10%;
  padding: 20px 10px 0 10px;
}
</style>
