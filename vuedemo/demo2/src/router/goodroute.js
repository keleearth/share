import Vue from 'vue';
import Router from 'vue-router';
import GoodLists from "./../views/GoodLists";
import Img from "../views/Img";
import Title from "../views/Title";

Vue.use(Router);
export default new Router({
  routes:[
    {
      path:'/goods/:goodId',
      //path:'/',
      name:'GoodLists',
      component:GoodLists
    },
    {
      path:'/title',
      name:'Title',
      component:Title
    },
    {
      path:'/img',
      name:'Img',
      component:Img
    }
  ]
})
