<template>
  <div class="featured-lists">
    <FeaturedList
      :featuredName="'All'"
      :countOfFeatured="$store.listsData.length"
      :urlName="'AllLists'"
    />
    <FeaturedList
      :featuredName="'Completed'"
      :countOfFeatured="$store.listsData.length"
      :urlName="'Completed'"
    />
  </div>
</template>

<script>
import FeaturedList from "./FeaturedList.vue";
export default {
  name: "FeaturedLists",
  components: {
    FeaturedList,
  },
};
</script>

<style scoped>
.featured-lists {
  height: 18%;
  padding: 10px 5px 0 0;
}
</style>
