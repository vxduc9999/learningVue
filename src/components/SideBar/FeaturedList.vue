<template>
  <router-link
    :to="{ name: urlName }"
    @click.native="$store.selected = featuredName"
    :class="{
      'featured-lists-element': true,
      'selected-featured': $store.selected === featuredName,
    }"
  >
    <div class="featured-lists-detail">
      <i class="material-icons">
        all_inclusive
      </i>
      <h2 class="feature-name">{{ featuredName }}</h2>
    </div>
    <p>{{ countOfFeatured }}</p>
  </router-link>
</template>

<script>
export default {
  name: "FeaturedList",
  props: {
    featuredName: {
      type: String,
    },
    countOfFeatured: {
      type: Number,
    },
    urlName: {
      type: String,
    },
  },
};
</script>

<style scoped>
h2 {
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.featured-lists-element {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  border-radius: 12px;
  margin-bottom: 15px;
  padding: 10px;
  height: 25%;
  background: rgb(214, 212, 212);
}

.featured-lists-detail {
  display: flex;
  align-items: center;
  min-width: 0;
  margin-right: 30px;
}

.featured-lists-element p {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
}

.selected-featured {
  border-radius: 10px;
  background: rgb(7, 49, 236);
  color: white;
}
</style>
