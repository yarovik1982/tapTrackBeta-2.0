import { createRouter, createWebHistory } from 'vue-router'
import CommonPage from '../views/CommonPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'common',
      component: CommonPage,
    },
    {
      path:'/place',
      name:'place',
      component:() => import('../views/PlacePage.vue')
    },
    {
      path:'/beer',
      name:'beer',
      component:() => import('../views/BeerPage.vue')
    },
    {
      path:'/brewery',
      name:'brewery',
      component:() => import('../views/BreweryPage.vue')
    },
    
  ]
})

export default router
