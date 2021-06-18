import Vue from "vue";
import App from "./App.vue";
import VueStash from "vue-stash";
import store from "./store";
import router from "./router";
import "./css/reset.css";

Vue.use(VueStash);
Vue.config.productionTip = false;

new Vue({
  router,
  data: { store },
  render: (h) => h(App),
}).$mount("#app");
