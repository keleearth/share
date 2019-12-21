import Vue from 'vue'
import App from './App.vue'
import router from './router/goodroute'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
