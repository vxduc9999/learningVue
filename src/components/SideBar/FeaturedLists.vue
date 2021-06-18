<template>
  <div class="featured-lists">
    <div class="featured-lists-element">
      <div class="featured-lists-detail">
        <span>icon</span>
        <h2>All</h2>
      </div>
      <p>count_all</p>
    </div>
    <div class="featured-lists-element">
      <div class="featured-lists-detail">
        <span>icon</span>
        <h2>Completed</h2>
      </div>
      <p>count_completed</p>
    </div>
    <div class="featured-lists-element">
      <div class="featured-lists-detail">
        <span>icon</span>
        <h2>Important</h2>
      </div>
      <p>count_important</p>
    </div>
  </div>
</template>

<style scoped>
.featured-lists {
  height: 20%;
}

.featured-lists-element {
  display: flex;
  justify-content: space-between;
}

.featured-lists-detail {
  display: flex;
}
</style>
