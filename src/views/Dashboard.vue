<template>
  <div class="home">
    <header style="display:inline">
      <button
        v-for="(tab, index) in tabs"
        v-bind:key="tab"
        v-on:click="say((currentTab = index))"
      >
        {{ tab }}
      </button>
      <router-link to="/">Logout</router-link>
    </header>
    <main>
      <h1>{{ message }}</h1>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      currentTab: "",
      message: "",
      tabs: ["Page1", "Page2"],
    };
  },
  methods: {
    say: function() {
      return (this.message = "This is page " + (this.currentTab + 1));
    },
  },
  components: {},
};
</script>

<style>
.home h1,
.home router-link {
  display: inline;
}
</style>
