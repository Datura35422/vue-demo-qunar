import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail'
// @指src目录
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id', // 动态路由，路由是以/detail/开头的，:id为参数
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) { // 滚动行为
    return { x: 0, y: 0 }
  }
})
