import Vue from 'vue'
import Router from 'vue-router'
import GoodLists from '@/views/GoodLists'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/static/loading-svg/loading-balls.svg',
  attempt: 1
});

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodLists',
      component: GoodLists
    }
  ]
})
