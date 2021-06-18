<template>
  <div class="personal-lists">
    <h1>My Lists</h1>
    <div class="personal-lists-detail">
      <div class="personal-lists-detail-left">
        <span>icon</span>
        <p>NameList</p>
      </div>
      <div class="personal-lists-detail-right">
        <p>0</p>
        <p>kebab_menu</p>
      </div>
    </div>
    <div class="personal-lists-detail">
      <div class="personal-lists-detail-left">
        <span>icon</span>
        <p>NameList2</p>
      </div>
      <div class="personal-lists-detail-right">
        <p>0</p>
        <p>kebab_menu</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.personal-lists {
  height: 65%;
}
.personal-lists-detail {
  display: flex;
  justify-content: space-between;
}

.personal-lists-detail-left {
  display: flex;
  width: 50%;
}

.personal-lists-detail-right {
  display: flex;
  width: 50%;
  justify-content: flex-end;
}
</style>
