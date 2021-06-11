<template>
  <div class="root">
    <div class="left_page_container">
      <div class="left_page_item">
        <div class="item">
          <div class="icon">
            <i class="material-icons" id="icons">
              all_inclusive
            </i>
          </div>
          <span>All</span>
        </div>
        <p>{{ all.countAll }}</p>
      </div>
      <div class="left_page_item">
        <div class="item">
          <div class="icon">
            <i class="material-icons" id="icons">
              star_rate
            </i>
          </div>
          <span>Important</span>
        </div>
        <p>{{ all.countImpotant }}</p>
      </div>
      <div class="left_page_item">
        <div class="item">
          <div class="icon">
            <i class="material-icons" id="icons">
              check_circle_outline
            </i>
          </div>
          <span>Completed</span>
        </div>
        <p>{{ all.countComplete }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListFeature",
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
  computed: {
    all: function() {
      let countAll = 0;
      let countImpotant = 0;
      let countComplete = 0;
      for (let list of this.lists) {
        countAll += list.tasks.length;
        for (let task of list.tasks) {
          if (task.important === true) countImpotant++;
          if (task.done === true) countComplete++;
        }
      }
      return { countAll, countImpotant, countComplete };
    },
  },
  data() {
    return {
      countAll: 0,
      countImpotant: 0,
      countComplete: 0,
    };
  },
};
</script>

<style scoped>
.root {
  margin-top: 20px;
}

#icons {
  font-size: 30px;
}

.left_page_container {
  margin-left: 10px;
}

.left_page_item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.item {
  height: 30px;
  display: flex;
}

.item span {
  padding-left: 20px;
  padding-top: 10px;
}

.left_page_item p {
  padding-top: 8px;
}
</style>
