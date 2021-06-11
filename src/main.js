import Vue from 'vue'
import App from './App.vue'
import router from './router'
import resetcss from '@/css/resetCss.css'

Vue.config.productionTip = false

new Vue({
  resetcss,
  router,
  render: h => h(App)
}).$mount('#app')
