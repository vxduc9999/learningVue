<template>
  <div class="personal-list-container">
    <h2>My Lists</h2>
    <div class="personal-lists">
      <PersonalList v-for="list in $lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script>
import PersonalList from "./PersonalList.vue";
export default {
  name: "PersonalLists",
  components: {
    PersonalList,
  },
  mounted() {
    if (this.$route.params.listId) {
      this.$store.selectedListId = this.$route.params.listId;
    }
  },
  computed: {
    $lists() {
      return this.$store.listsData;
    },
  },
};
</script>

<style scoped>
.personal-list-container {
  height: 70%;
}

h2 {
  font-size: 22px;
  margin: 5px 5px 10px 10px;
}

.personal-lists {
  height: 90%;
  overflow: auto;
}
</style>
