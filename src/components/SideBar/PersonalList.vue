<template>
  <div
    :class="{
      'personal-list-detail': true,
      'selected-list': $store.selectedListId === list.id,
    }"
  >
    <div class="personal-list-detail-left">
      <i class="personal-list-detail-icon material-icons">
        list
      </i>
      <input
        v-if="$store.editting.listId === list.id"
        :value="list.name"
        v-focus
        type="text"
        @keyup.enter="$event.target.blur()"
        @blur="editListName(list.id, $event)"
      />
      <router-link
        :to="{
          name: 'ListDetails',
          params: { listId: list.id },
        }"
        v-else
        class="list-name"
        @click.native="$store.selectedListId = list.id"
      >
        <p>{{ list.name }}</p>
      </router-link>
    </div>
    <div class="personal-list-detail-right">
      <p>{{ $store.countAllTasksByListId(list.id) }}</p>
      <i class="kebab-menu-icon material-icons">
        more_vert
      </i>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "PersonalLists",
  directives: {
    focus: {
      inserted(el) {
        Vue.nextTick(() => el.focus());
      },
    },
  },
  props: {
    list: {
      type: Object,
    },
  },
  methods: {
    editListName(listId, $event) {
      const listName = $event.target.value.toString().trim();
      if (!listName) {
        return alert("List name required!");
      }

      const duplicated = !!this.$store.listsData.find(
        (list) => list.id !== listId && list.name === listName
      );
      if (duplicated) {
        return alert("Duplicated name!");
      }

      const isSuccess = this.$store.editListName(listId, listName);
      if (!isSuccess) {
        return alert("There is something wrong!");
      }
    },
  },
};
</script>

<style scoped>
.personal-list-detail {
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 5px;
  margin-right: 5px;
}

.selected-list {
  border-radius: 10px;
  background: rgb(198, 236, 243);
}

.personal-list-detail-left {
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  margin-right: 15px;
  min-width: 0;
}

.personal-list-detail-icon {
  margin-left: 5px;
}

input {
  margin-top: 5px;
  margin-left: 10px;
  width: 100%;
  height: 50%;
}

.list-name {
  margin-left: 10px;
  margin-top: 13px;
  height: 80%;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: black;
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: rgb(214, 210, 210, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(129, 126, 126);
  border-radius: 10px;
  border: 2px solid rgb(214, 210, 210, 0);
}

.personal-list-detail-right {
  display: flex;
  justify-content: flex-end;
  padding: 5px 0 0 5px;
}

.personal-list-detail-right p {
  margin: 5px 5px 0 5px;
}

.kebab-menu-icon {
  margin-top: 2px;
}
</style>
