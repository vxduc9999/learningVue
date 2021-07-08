<template>
  <div class="home">
    <SideBar />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import SideBar from "./SideBar/SideBar.vue";
export default {
  name: "Home",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  height: 100vh;
}
</style>
