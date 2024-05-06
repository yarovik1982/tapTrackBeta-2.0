import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PlacePage from '@/views/PlacePage.vue'
import BeerPage from '@/views/BeerPage.vue'
import BreweryPage from '@/views/BreweryPage.vue'


  const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children:[
      ],
    },
    {
      path:'/place',
      name:'place',
      // component:() => import('@/views/PlacePage.vue')
      component:PlacePage
    },
    {
      path:'/beer',
      name:'beer',
      // component:() => import('@/views/BeerPage.vue')
      component:BeerPage
    },
    {
      path:'/brewery',
      name:'brewery',
      // component:() => import('@/views/BreweryPage.vue')
      component:BreweryPage
    },
    {
      path:'/profile',
      name:'profile',
      component:() => import('@/views/ProfilePage.vue')
    },
    
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
