import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'

import Home from '../pages/home'
import Sort from '../pages/sort'
import Car from '../pages/car'
import Me from '../pages/me'
import Search from '../pages/search'
Vue.use(Router)

let routes = [
{path:'*',redirect:'/home'},
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/search',
      name: 'search',
      component: Search	
    	
    }
    
  ]
export default new Router({
  routes
})
