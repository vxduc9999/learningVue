import Vue from "vue";
import App from "./App.vue";
import VueStash from "vue-stash";
import store from "./store";

Vue.use(VueStash);
Vue.config.productionTip = false;

new Vue({
  data: { store },
  render: (h) => h(App),
}).$mount("#app");
