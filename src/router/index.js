import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PlacePage from '@/views/PlacePage.vue'
import BeerPage from '@/views/BeerPage.vue'
import BreweryPage from '@/views/BreweryPage.vue'
// import TestPage from '@/views/TestPage.vue'


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
    // {
    //   path:'/test',
    //   name:'test',
    //   // component:() => import('@/views/TestPage.vue')
    //   component:TestPage
    // },
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
      component:() => import('@/views/ProfilePage.vue'),
      children:[
        {
          path:'/profile_favorite',
          name:'profile-favorite',
          component:() => import('@/views/ProfileFavoritePage.vue')
        },
        {
          path:'/profile_reviews',
          name:'profile-reviews',
          component:() => import('@/views/ProfileReviewsPage.vue')
        },
        {
          path:'/profile_places',
          name:'profile-places',
          component:() => import('@/views/ProfilePlacesPage.vue')
        },
        {
          path:'/profile_brewery',
          name:'profile-brewery',
          component:() => import('@/views/ProfileBreweryPage.vue')
        },
      ]
    },
    
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  // router.beforeEach((to, from, next) => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const access = JSON.parse(localStorage.getItem("access"));
  //   if (to.path.startsWith("/profile")) {
  //     if (access && user) {
  //       next();
  //     } else {
  //       next("/");
  //     }
  //   } else {
  //     next();
  //   }
  // });
export default router
