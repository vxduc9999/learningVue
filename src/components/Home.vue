<template>
  <div class="home">
    <SideBar />
    <ListDetails />
  </div>
</template>

<script>
import SideBar from "./SideBar/SideBar.vue";
import ListDetails from "./ListDetails/ListDetails.vue";

export default {
  name: "Home",
  components: {
    SideBar,
    ListDetails,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  height: 100vh;
}
</style>
