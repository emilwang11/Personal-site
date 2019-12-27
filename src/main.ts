import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap/scss/bootstrap.scss'
import BootstrapVue from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-155073671-1'
})
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
